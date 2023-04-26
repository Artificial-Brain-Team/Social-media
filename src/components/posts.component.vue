<template>
  <div v-for="post in posts">
      <div class="post-separator">
          <post :title="post.title" :body="post.body"/>
          <router-link :to="{name:'editPost', params: {id: post.userId, idPost: post.id}}" class="editPost">Edit</router-link>
          <pv-button label="Delete" @click="deletePost(post.id)"></pv-button>
      </div>
  </div>
</template>

<script>
import {PostApiService} from "@/services/post-api.service";
import Post from "@/components/post.vue";

export default {
    name: "posts.component",
    components: {Post},
    data(){
        return{
            id: 0,
            posts: [],
            postService: new PostApiService()
        }
    },
    methods: {
        deletePost(id){
            this.postService.delete(id).then((response)=>{
                if (response.status === 200){
                    alert("post deleted")
                    this.getAll()
                }
                else{
                    alert("error deleting post")
                }
            })
        },
        getAll(){
            this.postService.getAll().then((response)=>{
                this.posts = response.data
            })
        }
    },
    beforeMount() {

        this.id = this.$route.params.id

        this.getAll()
    }

}
</script>

<style scoped>

.editPost{
    color: blue;
    margin-right: 10px;
}

.post-separator{
    margin-bottom: 30px;
}

</style>
<template>
  <div v-for="post in posts">
      <div class="post-separator">
          <post :title="post.title" :body="post.body"/>
          <router-link :to="{name:'editPost', params: {id: post.userId, idPost: post.id}}" class="editPost">Edit</router-link>
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
    beforeMount() {

        this.id = this.$route.params.id

        this.postService.getPostByIdUser(this.id).then((response)=>{
            this.posts = response.data
        })
    }

}
</script>

<style scoped>

.editPost{
    color: blue;
}

.post-separator{
    margin-bottom: 30px;
}

</style>
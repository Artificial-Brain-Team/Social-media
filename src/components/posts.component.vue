<template>
  <div v-for="post in posts">
      <post :title="post.title" :body="post.body"/>
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

</style>
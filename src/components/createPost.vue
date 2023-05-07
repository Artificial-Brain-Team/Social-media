<template>
  <div>
      <Label>Title</Label>
      <p/>
      <div>
          <pv-input-text type="text" v-model="title"></pv-input-text>
      </div>
      <Label>Content</Label>
      <div>
          <pv-text-area v-model="body" autoResize rows="5" cols="30"/>
      </div>

      <pv-button @click="create()" label="Post"/>

  </div>
</template>

<script>
import {PostApiService} from "@/services/post-api.service";

export default {
    name: "createPost",
    data(){
        return{
            title: "",
            body: "",
            postService: new PostApiService()
        }
    },
    methods:{
        create(){

            const body = {"title": this.title, "body": this.body, "userId": parseInt(this.$route.params.id)};

            this.postService.createPost(body).then((response)=>{
                if (response.status === 201){
                    alert("post created")
                    this.$router.push('/users');
                }
                else{
                    alert("post not created")
                }
            })

        }
    }
}
</script>

<style scoped>

</style>
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

        <pv-button @click="update()" label="Update"/>

    </div>
</template>

<script>
import {PostApiService} from "@/services/post-api.service";

export default {
    name: "editPost",
    data(){
        return{
            idPost: 0,
            title: "",
            body: "",
            postService: new PostApiService()
        }
    },
    methods: {
        update(){

            const body = {"title": this.title, "body": this.body};

            this.postService.update(this.idPost,body).then((response)=>{
                if( response.status === 200){
                    alert("post updated")
                    this.$router.push(`/user/${this.$route.params.id}/posts`);
                }else{
                    alert("error updating post")
                }
            })
        }
    },
    beforeMount(){
        this.idPost = this.$route.params.idPost;

        this.postService.getPostById(this.idPost).then((response)=>{
            this.title = response.data.title;
            this.body = response.data.body;
        })
    }
}
</script>

<style scoped>

</style>
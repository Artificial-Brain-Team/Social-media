<template>
    <div>
        <label>User</label>
        <pv-input-text v-model="username"></pv-input-text>

        <label>Password</label>
        <pv-input-text v-model="password"></pv-input-text>

        <pv-button label="login" @click="loginUser()"></pv-button>

    </div>
</template>
  
<script>
    import {UserApiService} from "@/services/user-api.service";

  export default {
    name: "login",
        
    data(){
        return{
            username: "",
            password: "",
            userApiService: new UserApiService()
        }
    },

    methods: {
        loginUser(){
            
            const body = {
                "email": this.username,
                "password": this.password
            }

            this.userApiService.login(body).then((response)=>{
                window.localStorage.setItem("jwt",response.data.accessToken)
            })
        }
    }
      
  }
</script>
  
<style scoped>
  
</style>
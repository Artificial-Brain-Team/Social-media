<template>
  <div>
      <Label>Name</Label>
      <pv-input-text type="text" v-model="name"></pv-input-text>
  </div>
  <div>
      <Label>Username</Label>
      <pv-input-text type="text" v-model="username"></pv-input-text>
  </div>

  <div>
      <Label>Email</Label>
      <pv-input-text type="text" v-model="email"></pv-input-text>
  </div>

  <div>
      <pv-button label="submit" @click="handleClick()"></pv-button>
  </div>

</template>

<script>
import {UserApiService} from "@/services/user-api.service";

export default {
    name: "createuser",
    data (){
        return{
            userService: new UserApiService(),
            name: "",
            username: "",
            email: "",
        }
    },
    methods: {
        handleClick(){

            const body =
                {
                    "name": this.name,
                    "username": this.username,
                    "email": this.email,
                }

            this.userService.createUser(body).then((response)=>{
                if (response.status === 201)
                {
                    alert("User Created")
                }
                else
                {
                    alert("User not created")
                }
            })
        }
    }

}
</script>

<style scoped>

</style>
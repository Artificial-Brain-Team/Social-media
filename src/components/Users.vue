<template>

    <div v-for="user in users">
        <router-link  :to="{ name: 'user', params: { id: user.id }}">user {{user.id}} {{user.username}}</router-link>
    </div>

</template>

<script>
import {UserApiService} from "@/services/user-api.service";

export default {
    name: "Users",
    data(){
        return{
            users: [],
            userService: new UserApiService()
        }
    },
    beforeMount() {
        //invoke API
        this.userService.getAll().then((response)=>{
           this.users = response.data
        })

    }

}
</script>

<style scoped>

</style>
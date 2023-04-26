<template>
  <div>
      User {{id}}
  </div>
  <pv-button label="Back to Home" @click="backToHome()"></pv-button>
</template>

<script>
export default {
    name: "User",
    data(){
        return{
            id:0
        }
    },
    methods: {
       backToHome:function(){
           this.$router.push('/')
       }
    },
    beforeMount() {
       this.id = this.$route.params.id
        // Invocar el api
    }
}
</script>

<style scoped>

</style>
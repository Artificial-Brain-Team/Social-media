<template>
  <div>Home</div>
  <LoginComponent></LoginComponent>

</template>

<script>
import login from "@/components/login.component.vue";
import LoginComponent from "./login.component.vue";

export default {
    name: "Home",
    components: { LoginComponent }
}
</script>

<style scoped>

</style>
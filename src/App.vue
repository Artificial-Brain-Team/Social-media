<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Home from "@/components/Home.vue";
</script>

<template>
  <header>
  </header>

  <main>
      <router-link to="/">Home</router-link>
      <p/>
      <router-link to="/ListWelcome">Welcome</router-link>
      <p/>
      <router-link to="/about">About</router-link>
      <p/>
      <router-link to="/users">Users</router-link>
      <p/>
      <router-link to="CreateUser">Create User</router-link>
      <router-view></router-view>
  </main>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

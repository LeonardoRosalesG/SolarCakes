<template>
    <nav>
    <router-link to="/">Inicio</router-link> 
    <!-- <router-link to="/about">About</router-link> | -->
    <router-link to="/client">Cliente</router-link> 
    <router-link to="/baker">Pastelero</router-link>
  </nav>
</template>

<script>
  export default{
    
  }
</script>

<style scoped>
nav {
  padding: 30px;
  background-color: #5f64cb;
}

nav a {
  font-weight: bold;
  color: #fff;
  background-color: #3b3e7e;
  padding: 15px;
  border-radius: 12px;
  text-decoration: none;
  margin: 10px;
}

nav a.router-link-exact-active {
  color: #C7C1FF;
}
</style>
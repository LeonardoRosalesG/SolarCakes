<template>
  <div class="home">
    <h1>¡Bienvenido a Solar Cakes!</h1>
    <img alt="Solar Cakes logo" src="../assets/solarCakes_onlyLogo.png">
    <nav>
    <router-link to="/client">Soy un cliente</router-link> 
    <router-link to="/baker">Soy un pastelero</router-link>
  </nav>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
}
</script>

<style scoped>
.home{
  background-color: #9391ff;
}
h1{
  margin-top: 0;
}
img{
  max-width: 470px;
  max-height: 470px;
}

nav {
  padding: 30px;
  background-color: #9391ff;
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
nav a:hover {
  box-shadow: 0px 10px 19px -3px rgba(59,62,126,0.8);
  -webkit-box-shadow: 0px 10px 19px -3px rgba(59,62,126,0.8);
  -moz-box-shadow: 0px 10px 19px -3px rgba(59,62,126,0.8);  
  transition: 0.5s;
}
</style>
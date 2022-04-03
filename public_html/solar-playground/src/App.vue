<template>
 <router-view/>
  <FooterPage/>
</template>


<script>
// @ is an alias to /src
import FooterPage from '@/components/FooterInfo.vue'
import HomeView from '@/views/HomeView.vue'

export default {
  name: 'App',
  components: {
    HomeView,
    FooterPage,
  }
}
</script>


<style>
#app {
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

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

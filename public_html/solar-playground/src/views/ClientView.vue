<template>
  <NavSwitch/>
  <h1>Menú</h1>
  <FlavourVisualization/>
  <DecorationVisualization/>
  <nav id="startOrder">
    <router-link to="/client/user">¡Ordena tu pastel!</router-link> 
  </nav>
  
</template> 

<script>

import NavSwitch from '@/components/NavSwitch.vue'
import FlavourVisualization from '@/components/client_components/FlavourVisualization.vue'
import DecorationVisualization from '@/components/client_components/DecorationVisualization.vue'

export default{
  components:{
    NavSwitch, DecorationVisualization, FlavourVisualization, 
  },
  
}
</script>

<style scoped>
  section{
    background-color: #D3F3EE;
  }
  h1{
    background-color: #2B5A4B;
    color:white;
    margin: 0%;
  }
  #startOrder {
  padding: 30px;
  background-color: #D3F3EE;
  }
  #startOrder a {
  font-weight: bold;
  color: #fff;
  background-color: #3b3e7e;
  padding: 15px;
  border-radius: 12px;
  text-decoration: none;
  margin: 10px;
}
</style>
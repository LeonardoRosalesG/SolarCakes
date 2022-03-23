<template>
  <section class="home">
    <SolarCakesStartHeader message = "¡Bienvenido a Solar Cakes!"/>
    <div>
        <button @click="$router.push('client')">Soy un cliente</button>
        <button @click="$router.push('baker')">Soy un pastelero</button>
    </div>
  </section>
</template>
<script>
// @ is an alias to /src
import SolarCakesStartHeader from '@/components/StartHeader.vue'

export default {
  name: 'HomeView',
  components: {
    SolarCakesStartHeader,
  }
}
</script>

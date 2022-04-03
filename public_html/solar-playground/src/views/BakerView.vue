<template>
  <NavSwitch/>
  <FlavourQuantity/>
  <DecorationsQuantity/>
  <ClientsOrders/>

</template>

<script>
import NavSwitch from '@/components/NavSwitch.vue'
import FlavourQuantity from '@/components/baker_components/FlavourQuantity.vue'
import DecorationsQuantity from '@/components/baker_components/DecorationsQuantity.vue'
import ClientsOrders from '@/components/baker_components/ClientsOrders.vue'

export default{
  components:{
    NavSwitch, FlavourQuantity, DecorationsQuantity, ClientsOrders
  }
}

</script>

<style>

</style>
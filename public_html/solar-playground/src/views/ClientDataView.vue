<template>
    <client-contact></client-contact>
    <button id="continueButton" @click="checkUserFields">Elegir pastel y decoraciones</button>
</template>

<script>
import ClientContact from '../components/order_components/ClientContact.vue'

export default{
    components:{
        ClientContact
    },
    methods:{
        checkUserFields: function(){
            let variables = this.$store.getters.getContactData
            if(variables.includes(undefined) || variables.includes('')){
                alert("Hay campos que no has llenado.") 
            }else{
                this.$router.replace({ path: '/client/cake' }); 
                window.history.forward(1);
            }
            
        }
    }
}
</script>

<style scoped>
    :host{
        background-color: bisque;
    }
</style>
<template>
    <FlavourCombination/>
    <DecorationCombination/>
    <button id="continueButton" @click="checkCakeFields">Revisar pedido</button>
</template>

<script>
import FlavourCombination from '../components/order_components/FlavourCombination.vue'
import DecorationCombination from '../components/order_components/DecorationCombination.vue'
export default{
    components:{
        FlavourCombination, DecorationCombination
        },
        methods:{
            checkCakeFields: function(){
            let flavos = this.$store.getters.getFlavoursFlag
            console.log(flavos)
            if(flavos == null || flavos.includes('') || flavos.length === 0){
                alert("Selecciona al menos un sabor.")
            }else{
                this.$store.commit("setFlavourPrices")
                this.$store.commit("setFlavourPricesSum")
                this.$store.commit("setFlavourNames")
                this.$store.commit("setDecorationPrices")
                this.$store.commit("setDecorationPricesSum")
                this.$store.commit("setDecorationNames")
                this.$router.replace({ path: '/checkout' })
            }
        }
        }
}

</script>
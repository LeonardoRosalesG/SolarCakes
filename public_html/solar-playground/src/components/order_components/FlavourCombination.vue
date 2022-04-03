<template>
    <section id="flavourCombination">
        <button class="btn btn-secondary" type="button" data-toggle="collapse" data-target="#collapseFlavours" aria-expanded="false" aria-controls="collapseFlavours">
            Elige 1 o 2 sabores de pastel
        </button>
        <div class="collapse" id="collapseFlavours">
            <table id="flavourCombinationTable">
            <tr>
                <th>Seleccionar</th>
                <th>Nombre del sabor</th>
                <th>Sabor</th>
                <th>Precio</th>
            </tr>
            <tr v-for="(flavour, id) in $store.getters.getFlavours">
                
                <td><input type="checkbox" name="flavourSelection" 
                :id="id" :value="id" v-model="checkedFlavours" 
                :disabled="checkedFlavours.length > 1 && checkedFlavours.indexOf(id) === -1"></td>
                <td>{{flavour.name}}</td>
                <td>{{flavour.flavour}}</td>
                <td>${{flavour.price}}</td>
            </tr>
            
    </table>
        </div>
    </section>
</template>


<script>
export default {
    computed:{
        checkedFlavours:{
            get: function(){
                return this.$store.state.flavoursFlag;
            },
            set: function(val){
                console.log(val);
                this.$store.commit("getFlavoursFromClient", val);
            }
        }
    }
}
</script>

<style scoped>
    #flavourCombination button{
        margin-left:auto ;
        margin-right: auto; 
        margin-bottom: 15px;
    }
    #flavourCombinationTable{
        margin-left:auto ;
        margin-right: auto;
    }
    #flavourCombination{
        padding: 20px;
    }
    
</style>
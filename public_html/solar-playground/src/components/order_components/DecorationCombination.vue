<template>
    <section id="decorationCombination">
        <button class="btn" type="button" data-toggle="collapse" data-target="#collapseDecorations" aria-expanded="false" aria-controls="collapseDecorations">
            Elige las decoraciones que quieras
        </button>
        <div class="collapse" id="collapseDecorations">
            <table id="decorationCombinationTable">
            <tr>
                <th>Seleccionar</th>
                <th>Nombre del sabor</th>
                <th>Sabor</th>
                <th>Precio</th>
            </tr>
            <tr v-for="(decoration, id) in $store.getters.getDecorations">
                
                <td><input type="checkbox" name="decorationSelection" :id="id" :value="id" v-model="checkedDecorations"></td>
                <td>{{decoration.name}}</td>
                <td>{{decoration.description}}</td>
                <td>${{decoration.price}}</td>
            </tr>
            
    </table>
        </div>
    </section>
</template>


<script>
export default {
    computed:{
        checkedDecorations:{
            get: function(){
                return this.$store.state.decorationsFlag;
            },
            set: function(val){
                console.log(val);
                this.$store.commit("getDecorationsFromClient", val);
            }
        }
    }
}
</script>

<style scoped>
    #decorationCombination button{
        margin-left:auto ;
        margin-right: auto; 
        background-color: #FF914D;
        margin-bottom: 15px;
    }
    #decorationCombinationTable{
        margin-left:auto ;
        margin-right: auto;
    }
    #decorationCombination{
        padding: 20px;
    }
    #decorationCombinationTable th
    {
       background-color: #FF914D; 
    }
    
</style>
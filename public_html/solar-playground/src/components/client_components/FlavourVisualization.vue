<template>
    <section id="flavourVisualization">
        <div>
            <h2>Sabores</h2>
            <table id="flavourVisualizationTable">
            <tr>               
                <th>Nombre del sabor</th>
                <th>Sabor</th>
                <th>Precio</th>
            </tr>
            <tr v-for="flavour of $store.getters.getFlavours">
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
}
</script>

<style scoped>
    #flavourVisualization{
        padding-top: 30px;
        padding-bottom: 30px;
    }
    h2{
        background-color: #377561;
        color: white;
        width: 300px;
        border-radius: 15px;
        margin-left: auto;
        margin-right: auto;;
    }
    #flavourVisualizationTable{
        margin-left:auto ;
        margin-right: auto;
        
    }
    #flavourVisualizationTable th{
        background-color: #377561;
        color: white;
        text-align: center;
    }
    #flavourVisualizationTable td{   
        text-align: left;
    }

    #flavourVisualizationTable tr:nth-child(odd){
        background-color: #61C9A8 ; 
    }
    
</style>
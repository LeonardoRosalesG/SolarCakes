<template>
    <section id="decorationVisualization">
        <div>
            <h2>Decoraciones</h2>
            <table id="decorationVisualizationTable">
            <tr>               
                <th>Nombre del adorno</th>
                <th>Descripción</th>
                <th>Precio</th>
            </tr>
            <tr v-for="decoration of $store.getters.getDecorations">
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
}
</script>

<style scoped>
    #decorationVisualization{
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
    #decorationVisualizationTable{
        margin-left:auto ;
        margin-right: auto;
    }
    #decorationVisualizationTable th{
        background-color: #377561;
        color: white;
    }
    #decorationVisualizationTable td{   
        text-align: left;
    }

    #decorationVisualizationTable tr:nth-child(odd){
        background-color: #61C9A8 ; 
    }
    
</style>
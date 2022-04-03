<template>

<div id="tableContainer">
    <h2>Decoraciones</h2>
    <p></p>
    <table id="decorationTable">
            <tr>
                <th>Nombre de la decoración</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Cantidad</th>
            </tr>
            <tr v-for="decoration of $store.getters.getDecorations">
                <td>{{decoration.name}}</td>
                <td>{{decoration.description}}</td>
                <td>${{decoration.price}}</td>
                <td>{{decoration.quantity}}</td>
            </tr>
    </table>
</div>
</template>


<style scoped>
    #tableContainer{
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    #decorationTable{
        margin: 10px;
        padding: 10px;
    }
    #decorationTable th{
        background-color: #B5591C;
        color: white;
    }
    #decorationTable tr:nth-child(odd){
        background-color: #ffc27b;
    }

    #decorationTable td{
        text-align: left;
        padding: 10px;
    }
</style>


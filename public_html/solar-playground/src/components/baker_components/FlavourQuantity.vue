<template>

<div id="tableContainer">
    <h2>Sabores</h2>
    <p></p>
    <table id="flavourTable">
            <tr>
                <th>Nombre del adorno</th>
                <th>Sabor</th>
                <th>Precio</th>
                <th>Cantidad</th>
            </tr>
            <tr v-for="flavour of $store.getters.getFlavours">
                <td>{{flavour.name}}</td>
                <td>{{flavour.flavour}}</td>
                <td>${{flavour.price}}</td>
                <td>{{flavour.quantity}}</td>
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
    #flavourTable{
        margin: 10px;
        padding: 10px;
        
    }
    #flavourTable th{
        background-color: #B5591C;
        color: white;
    }

    #flavourTable tr:nth-child(odd){
        background-color: #ffc27b;
    }

    #flavourTable td{
        text-align: left;
        padding: 10px;
    }
</style>


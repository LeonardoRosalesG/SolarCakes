<template>
    <div id="tableContainer">
    <h2>Ordenes</h2>
    <p></p>
    <table id="ordersTable">
            <tr>
                <th>ID</th>
                <th>Cliente</th>
                <th>Teléfono</th>
                <th>Email</th>
                <th>Dirección</th>
                <th>Fecha</th>
                <th>Descripción</th>
            </tr>
            <!-- <p v-for="order in $store.getters.getOrders">{{order.phone}}</p> -->
            <tr v-for="order in $store.getters.getOrders">
                <td>{{order.order_id}}</td>
                <td>{{order.client_name}}</td>
                <td>{{order.phone}}</td>
                <td>{{order.email}}</td>
                <td style="width:20%">{{order.address}}</td>
                <td>{{order.date}}</td>
                <td>
                    <p v-for="descriptions in order.general_description">
                        <p v-for="description in descriptions">
                            {{description}}
                        </p>
                    </p>
                    </td>
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
    #ordersTable{
        margin: 10px;
        padding: 10px;
        
    }
    #ordersTable th{
        background-color: #B5591C;
        color: white;
    }

    #ordersTable tr:nth-child(odd){
        background-color: #ffc27b;
    }

    #ordersTable td{
        text-align: left;
        padding: 10px;
    }
</style>


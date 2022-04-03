<template>
    <section id="checkoutSection">
        <div id="clientData">
            <h2>Datos del cliente</h2>
            <div>
                <p>Nombre: {{$store.getters.getName}}</p>
                <p>Teléfono:{{$store.getters.getPhone}}</p>
                <p>Correo electrónico:{{$store.getters.getEmail}}</p>
                <p>Dirección:{{$store.getters.getAddress}}</p>
                <p>Fecha de entrega:{{$store.getters.getDate}}</p>    
            </div>
        </div>
        <div id="orderData">
            <h2>Datos del pedido</h2>
            <h4>Sabores</h4>
            <table>
                <tbody>
                    <tr>
                        <th>Sabor</th>
                        <th>Precio</th>
                    </tr>
                    <tr v-for="(flavour, index) in $store.getters.getFlavourNames">
                        <td>{{flavour}}</td>
                        <td>${{$store.getters.getFlavourPrices[index]}}</td>
                    </tr>
                </tbody>
            </table>
            <p>Total: ${{$store.getters.getFlavourPriceSum}}</p>
            <h4>Decoraciones</h4>
            <table>
                <tbody>
                    <tr>
                        <th>Decoración</th>
                        <th>Precio</th>
                    </tr>
                    <tr v-for="(decoration, index) in $store.getters.getDecorationNames">
                        <td>{{decoration}}</td>
                        <td>${{$store.getters.getDecorationPrices[index]}}</td>
                    </tr>
                </tbody>
            </table>
            <p>Total: ${{$store.getters.getDecorationPriceSum}}</p>
        </div>
        <button @click="saveOrder">Confirmar pedido</button>
    </section>
</template>

<script>
    export default{
        methods:{
            saveOrder: function(){
                this.$store.commit('setOrderFlag');
                this.$store.commit('addOrder');
                alert("Pedido realizado");
                this.$router.replace({ path: '/' }); 
            }
        }
    }
</script>

<style scoped>
    h2{
        align-self: center;
    }
    #clientData, #clientData>div{
        display: flex;
        flex-direction: column;
    }
    #clientData{
        align-items: center;
        
    }
    #clientData>div{
        align-items: flex-start;
        border: solid 2px black;
        border-radius: 10px;
        padding: 20px;
    }
    #checkoutSection{
        background-color: #D3F3EE;
    }
    #orderData, #clientData{
        display: flex;
        flex-direction: column;
        justify-content: center;
        
    }
    table {
        border: 1px solid black;
        table-layout: fixed;
        width: 200px;
        margin-left: auto;
        margin-right: auto;
    }
    th{
        background-color: #2B5A4B;
        color: white;
    }
    th, td{
        border: solid 1px black;
        text-align: center;
        margin: 10px;
        width: 300px;
        overflow: hidden;
    }
</style>
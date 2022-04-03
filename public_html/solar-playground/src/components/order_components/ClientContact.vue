<template>
    <section id="clientForm">
        
        <div class="inputContainer">
            <h3>Datos de contacto</h3>
            <input v-model="name" type="text" name="name" id="name" placeholder="Nombre completo">
            <input v-model="phone" type="tel" name="phone" id="phone" placeholder="Teléfono">
            <input v-model="email" type="email" name="email" id="email" placeholder="Correo eléctronico">
        </div>
        <div class="inputContainer">
            <h3>Dirección y fecha de entrega</h3>
            <input v-model="address" type="text" name="address" id="address" placeholder="Dirección">
            <input v-model="date" type="date" name="date" id="date">
        </div>
        
    </section>
    
</template>

<script>

export default{
    computed:{
        name:{
            set: function(val){
                this.$store.commit("setName", val);
            },
            get: function(){
                return this.$store.getters.getName
            }
            },
        phone:{
            set: function(val){
                this.$store.commit("setPhone", val);
            },
            get: function(){
                return this.$store.getters.getPhone
            }},
        email:{
            set: function(val){
                this.$store.commit("setEmail", val);
            },
            get: function(){
                return this.$store.getters.getEmail
            }
            },
        address:{
            set: function(val){
                this.$store.commit("setAddress", val);
            },
            get: function(){
                return this.$store.getters.getAddress
            }},
        date:{
            set: function(val){
                this.$store.commit("setDate", val);
            },
            get: function(){
                return this.$store.getters.getDate
            }
            },
    }
}
</script>

<style scoped>
    #clientForm{
        display: flex;
        justify-content: space-evenly;
        flex-direction: row;
        flex-wrap: wrap;
        width: 1000px;
        border: 1px solid #F00;
        margin-left: auto;
        margin-right: auto;
        background-color: beige;
    }
    .inputContainer{
        margin: 30px;
        padding: 15px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 400px;
        border: 1px solid #0F0;
        
    }
    .inputContainer input{
        margin: 5px;
        padding: 5px;
        width: 200px;
        border-radius: 10px;
    }
</style>
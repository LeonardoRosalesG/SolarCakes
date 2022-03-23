<template>
    <header>
        <div id="logoStartDiv">
            <img class="startLogo" src="../assets/solarCakes_logo.png" title="Solar Cakes" alt="solar cakes logo">
        </div>
        <div id="welcomeDiv">
            <h1>{{message}}</h1>
        </div>
    </header>
</template>

<script>
export default {
    name: 'SolarCakesStartHeader',
    props:{
         message: String
    }
 }
</script>

<style scoped>
    header{
        margin: 0;
        display: flex;
        justify-content: space-evenly;
        flex-direction: row;
    }
    .startLogo{
        width: 100px;
        height: 100px;
    }
    #welcomeDiv{
        margin-right: auto;
    }
    #logoStartDiv{
        margin-right: auto;
    }
</style>

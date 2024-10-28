<template>
  <div>
    <h1>Ciclos de vida Vue</h1>
    <p>{{saludo}}</p>
    <!-- <p v-if="this.var== true">True</p> -->
    <button @click="cambiarSaludo">Cambiar</button>
    <!-- <button v-on:click="cambiarEstado">Cambiar </button> -->
  </div>
</template>
<script>
export default {
    name: "CicloVida",
    data(){
        return{
            saludo: "Variable Saludo!",
            // var : false
        }
    },
    methods:{
        cambiarSaludo(){
            this.saludo = "Cambiado"
        },
        // cambiarEstado(){
        //     this.var = true
        // }
    },
    mounted(){
        console.log("Montado")
    },unmounted(){
        console.log("Desmontado")
    },updated(){
        console.log("Modificado")
    },created(){
        console.log("Creado")
    }
};
</script>
<style>
@import "../assets/css/estilos.css";
</style>
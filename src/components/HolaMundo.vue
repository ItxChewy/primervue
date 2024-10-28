<template>
  <div>
    <h1>Mi primera App con VUE</h1>
    <p>El nombre {{nombre}}</p>
    <img src="../assets/images/tipos-de-imágenes.jpg"/>
  </div>
</template>

<script>
export default {
  name: "HolaMundo",
  data(){
    return{
      nombre: "aaron",
      numero: 20,
      miArray: [],
      objeto:{}
    }
  }
};
</script>

<style>
@import '../assets/css/estilos.css';
h1 {
  color: green;
}
</style>
<template>
  <div>
    <h1>Estatico</h1>
    <MenuComponent/>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue';


export default {
  name: "App",
  components: {
    MenuComponent
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #143b63;
  margin-top: 60px;
}
</style>

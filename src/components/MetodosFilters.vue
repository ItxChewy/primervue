<template>
  <div>
    <h1>Metodos Filters</h1>
    <ul>
        <li v-for="num in numeros" :key="num">
            Números: {{num}},
            Doble: {{$filters.getNumeroDoble(num)}}
        </li>
    </ul>
    <hr>
    <ul>
        <li v-for="name in nombres" :key="name">
            Nombres: {{name}}
            Mayusc: {{$filters.mayuscula(name)}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "MetodosFilters",
    data(){
        return{
            nombres : ["lucia", "mario","RaUl", "ALEx"],
            numeros : ["12","3","1","19","67", "500"]
        }
    }
}
</script>

<style>

</style>
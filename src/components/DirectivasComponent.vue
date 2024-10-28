<template>
  <div>
    <h1>Par o Impar</h1>
    <h1>
        {{$data}}
    </h1>
    <label>Introduce Numero</label>
    <input type="number" v-model="numero" />
    <button>Comprobar</button>
    <h2 v-if="numero > 0" style="color:green">
        POSITIVO
    </h2>
    <h2 v-else-if=" numero < 0" style="color:red">
        NEGATIVO
    </h2>
    <h2 v-else style="color:yellow">
        CERO
    </h2>
    <ul v-if="series.length > 0" >
        <li v-for="serie in series" :key="serie">
            {{serie}}
        </li>
    </ul>


  </div>
</template>

<script>
export default {
  name: "DirectivasComponent",
  data() {
    return {
      numero: 1,
      nombre: "Alumno",
      edad : 33,
      series : ["Castle","The boys", "LQSA", "AQNHQV"]
    };
  }
};
</script>

<style>
</style>
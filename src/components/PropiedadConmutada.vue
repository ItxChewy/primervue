<template>
  <div>
    <h1>Propiedad Conmutada</h1>
    <!-- <ul>
        <li v-for="game of juegosRojos" :key="game" v-html="game">
            
        </li>
    </ul> -->
    <button v-on:click="getJuegosVerdes()">Juegos Verdes</button>
    <div v-html="html"></div>
  </div>
</template>

<script>
export default {
    name: "PropiedadConmutada",
    computed:{
        juegosRojos(){
            var datos = this.juegos;
            for (var  i = 0; i <datos.length;i++){
                var juego = datos[i];
                juego = "<span style='color:red'>"+ juego + "</span>";
                datos[i] = juego;
            }
            return datos
        }
    },methods:{
        getJuegosVerdes(){
            this.html ="";
            for( var juego of this.juegos){
                this.html += "<h3 style='color:green'>"+juego+"</h3>"
            }
        }
    },
    data(){
        return{
            juegos : ["LOL","FIFA", "NBA2K","GTA","Fortnite"],
            html: ""
        }
    },
}
</script>

<style>

</style>
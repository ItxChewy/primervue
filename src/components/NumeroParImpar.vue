<template>
  <div>
    <h1>Par Impar</h1>
    <label>Introduce numero: </label>
    <input type="number" v-model="numero"/>
    <button v-on:click="conocerDivisible()">Comprobar</button>
    <h1 v-html="comprobarParImpar"></h1>
    <div v-html="html"></div>
    <h1 v-if="numero % 2 == 0">PAR (directivas)</h1>
    <h1 v-else>IMPAR (directivas)</h1>
  </div>
</template>

<script>
export default {
    name:"NumeroParImpar",
    computed:{
        comprobarParImpar(){
            var mensaje = ""
            var numero = this.numero;
            if(numero % 2 == 0){
                mensaje = "<span style='color:red'>PAR(computed)</span>"
            }else{
                mensaje = "<span style='color:red'>IMPAR(computed)</span>"
            }
            return mensaje
        }
    },methods:{
        conocerDivisible(){
            if(this.numero % 2 == 0){
                this.html = "<h1>PAR (boton)</h1>"
            }else{
                this.html = "<h1>IMPAR (boton)</h1>"
            }
        }
    },
    data(){
        return{
            numero : 0,
            html: ""
        }
    }
}
</script>

<style>

</style>
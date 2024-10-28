<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/cine">Cine</router-link>
            </li>
            <li>
                <router-link to="/musica">Musica</router-link>
            </li>
            <li>
                <router-link to="/hooks">Ciclos Vida</router-link>
            </li>
            <li>
                <router-link to="/directiva">Formulario</router-link>
            </li>
            <li>
                <router-link to="/conmutada">Propiedad Comnutada</router-link>
            </li>
            <li>
                <router-link to="/parimpar">PAR O IMPAR</router-link>
            </li>
            <li>
                <router-link to="/filter">Filter</router-link>
            </li>
        </ul>

    </div>
</template>
<script>
export default {
    name: "MenuComponent"
}
</script>
<style >
ul#menu li{
display: inline;
padding: 2%;
}
</style>
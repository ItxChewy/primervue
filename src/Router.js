import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue'
import CineComponent from './components/CineComponent.vue'
import MusicaComponent from './components/MusicaComponent.vue'
import CicloVida from './components/CicloVida.vue'
import DirectivasComponent from './components/DirectivasComponent.vue'
import PropiedadConmutada from './components/PropiedadConmutada.vue'
import NumeroParImpar from './components/NumeroParImpar.vue'
import MetodosFilters from './components/MetodosFilters.vue'

const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/cine", component: CineComponent
    },
    {
        path: "/musica", component: MusicaComponent
    },
    {
        path: "/hooks", component: CicloVida
    },
    {
        path: "/directiva" , component: DirectivasComponent
    },
    {
        path : "/conmutada" , component : PropiedadConmutada
    },
    {
        path : "/parimpar" , component: NumeroParImpar
    },
    {
        path : "/filter" , component : MetodosFilters
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;
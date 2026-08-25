import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Productos from '../views/Productos.vue'
import Productores from '../views/Productores.vue'
import Contacto from '../views/Contacto.vue'

const routes = [
  { path: '/', name: 'Inicio', component: Inicio },
  { path: '/productos', name: 'Productos', component: Productos },
  { path: '/productores', name: 'Productores', component: Productores },
  { path: '/contacto', name: 'Contacto', component: Contacto }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
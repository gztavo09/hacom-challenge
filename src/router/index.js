import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/libros',
    name: 'books',
    component: () => import(/* webpackChunkName: "books" */ '../views/books/index.vue')
  },
  {
    path: '/libros/registro',
    name: 'books',
    component: () => import(/* webpackChunkName: "books" */ '../views/books/registro.vue')
  },
  {
    path: '/autores',
    name: 'authors',
    component: () => import(/* webpackChunkName: "authors" */ '../views/authors.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

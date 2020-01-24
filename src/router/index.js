import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DataKantin from '../views/DataKantin.vue'
import DataMakanan from '../views/DataMakanan.vue'
import Pembelian from '../views/Pembelian.vue'
import Navbar from '../views/layouts/Navbar.vue'
import Footer from '../views/layouts/Footer.vue'
import MainSidebar from '../views/layouts/MainSidebar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {default: Home, navbar: Navbar, mainsidebar: MainSidebar, footer: Footer},
  },
  {
    path: '/datakantin',
    name: 'datakantin',
    components: {default: DataKantin, navbar: Navbar, mainsidebar: MainSidebar, footer: Footer},
  },  
  {
    path: '/datamakanan',
    name: 'datakantin',
    components: {default: DataMakanan, navbar: Navbar, mainsidebar: MainSidebar, footer: Footer},
  },
  {
    path: '/pembelian',
    name: 'pembelian',
    components: {default: Pembelian, navbar: Navbar, mainsidebar: MainSidebar, footer: Footer},
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

export default router

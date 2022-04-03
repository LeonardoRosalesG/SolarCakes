import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientView from '../views/ClientView.vue'
import BakerView from '../views/BakerView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import ClientDataView from '../views/ClientDataView.vue'
import CakeDataView from '../views/CakeDataView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/client',
    name: 'client',
    component: ClientView
  },
  {
    path: '/baker',
    name: 'baker',
    component: BakerView
  },
  {
    path: '/client/user',
    name: 'user',
    component: ClientDataView
  },
  {
    path: '/client/cake',
    name: 'cake',
    component: CakeDataView
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

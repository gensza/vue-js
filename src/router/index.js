import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import AddProduct from '../views/AddProduct.vue'

const routes = [
  {
    path: '/',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/add',
    name: 'AddProduct',
    component: AddProduct
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

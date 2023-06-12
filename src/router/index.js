import Vue from 'vue'
import VueRouter from 'vue-router'
//  import HomeView from '../views/HomeView.vue'
// import IndexView from '../page/IndexView.vue'
const HomeView = { template: '<div>Home Page</div>' }
const AboutView = { template: '<div>About Page</div>' }
const IndexView = () => import('../page/IndexView.vue')

//  0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: IndexView,
    name: 'indexView',
    redirect: '/home',
    children: [
      { path: 'home', component: HomeView },
      // { path: 'about', component: () => import('../views/AboutView.vue')
      { path: 'about', component: AboutView }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

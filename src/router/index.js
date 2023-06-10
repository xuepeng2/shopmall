import Vue from 'vue'
import VueRouter from 'vue-router'
//  import HomeView from '../views/HomeView.vue'
// import IndexView from '../page/IndexView.vue'

Vue.use(VueRouter)

//  0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
const HomeView = {
  template: '<div>Home Page</div>'
}
const AboutView = { template: '<div>About Page</div>' }

const IndexView = () => import('../page/IndexView.vue')
// Expected indentation of 6 spaces but found 8
// Expected indentation of 4 spaces but found 8
const routes = [
  {
    path: '/',
    component: IndexView,
    name: 'indexView',
    redirect: '/home',
    children: [
      // A space is required after '{'
      { path: 'home', component: HomeView },
      { path: 'about', component: AboutView }
    ]
  }
]
/**
 * const routes2 = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
 */

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

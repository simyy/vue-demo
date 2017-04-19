import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import * as filters from './filters'

import Home from './views/home'
import Cate from './views/cate'
import Main from './main'


const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }


const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/cate', component: Cate },
]


Vue.use(VueRouter)
Vue.use(VueResource)

Vue.filter('date', filters.dateFilter)

const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
  let toPath = to.path
  let fromPath = from.path
  //console.log(`to: ${toPath} from: ${fromPath}`)
  router.app.isIndex = toPath === '/' || toPath === '/home'  ? true : false
  //console.log(router.app.isIndex)
  next()
})

const app = new Vue({
  router,
  render: h => h(Main),
}).$mount('#app')

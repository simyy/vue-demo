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
  { path: '/cate', component: Cate },
  { path: '*', component: Home },
]


Vue.use(VueRouter)
Vue.use(VueResource)

Vue.filter('date', filters.dateFilter)

const router = new VueRouter({
  routes
})

const app = new Vue({
  router,
  render: h => h(Main),
}).$mount('#app')

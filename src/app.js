import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import * as filters from './filters'

import Home from './views/home'


const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }


const routes = [
  { path: '/foo', component: Home },
  { path: '/bar', component: Bar }
]


Vue.use(VueRouter)
Vue.use(VueResource)

Vue.filter('date', filters.dateFilter)

const router = new VueRouter({
  routes
})

const app = new Vue({
    router
}).$mount('#app')

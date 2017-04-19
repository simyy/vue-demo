<template>
<div class="page page-current">
  <transition name="fade">
    <search-bar :pre="pre" v-if="show"></search-bar>
  </transition>
  <bar>
    <bar-item path="/home" label="全部" icon="home"></bar-item>
    <bar-item path="/cate" label="分类" icon="menu"></bar-item>
  </bar>
  <router-view transition="fade" transition-mode="out-in" keep-alive></router-view>
</div>
</template>

<script>
import Bar from './components/Bar'
import BarItem from './components/BarItem'
import SearchBar from './components/SearchBar'

import app from './app'


export default {
  data() {
    return {
      show: true,
      pre: '搜索主播或游戏'
    }
  },
  components: {
    Bar,
    BarItem,
    SearchBar
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>

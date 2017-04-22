<template>
<div class="page page-current">
  <transition name="fade">
    <div class="bar bar-nav" v-if="show">
      <search-bar pre="搜索主播或游戏"></search-bar>
    </div>
  </transition>

  <nav class="bar bar-tab">
    <bar-item path="/home" label="全部" icon="home"></bar-item>
    <bar-item path="/cate" label="分类" icon="menu"></bar-item>
  </nav>

  <router-view transition="fade" transition-mode="out-in" keep-alive></router-view>
</div>
</template>

<script>
import BarItem from './components/BarItem'
import SearchBar from './components/SearchBar'

import app from './app'


export default {
  data() {
    return {
      show: true,
    }
  },
  components: {
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

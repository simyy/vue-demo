<template>
<div class="page page-current">
  <search-bar :pre="pre" v-if="isIndex"></search-bar>
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
import SearchBar from './components/SearchBar.vue'

export default {
  data() {
    return {
      isIndex: true,
      pre: '搜索主播或游戏'
    }
  },
  components: {
    Bar,
    BarItem,
    SearchBar
  },
  computed: {
  }
}
</script>

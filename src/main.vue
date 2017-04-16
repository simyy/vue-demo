<template>
<div class="page page-current">
  <bar v-if="isIndex">
    <bar-item path="/home" label="全部" icon="home"></bar-item>
    <bar-item path="/cate" label="分类" icon="menu"></bar-item>
  </bar>
  <router-view transition="fade" transition-mode="out-in" keep-alive></router-view>
</div>
</template>

<script>
import Bar from './components/Bar'
import BarItem from './components/BarItem'

export default {
  data() {
    return {
      isIndex: true
    }
  },
  components: {
    Bar,
    BarItem
  }
}
</script>

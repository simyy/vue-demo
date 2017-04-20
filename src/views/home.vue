<template>
<div>
  <div class="list-block">
    <ul class="list-container">
      <li class="item-content" v-for="item in items">
        <div class="item-cate">{{item.cate}}</div>
        <div class="item-img">{{item.img}}</div>
        <div class="item-inner">
          <div class="item-title">{{item.title}}</div>
          <div class="item-source">{{item.source}}</div>
        </div>
      </li>
    </ul>
  </div>

  <div class="infinite-scroll-preloader">
    <div class="preloader"></div>
  </div>
</div>
</template>


<script>
import $ from 'zepto'

export default {
  ready () {
    console.log(items)
    for (let i = 0; i < 10; i++) {
      this.items.push({
        cate: 'LOL',
        img: 'img',
        title: '标题',
        source: 'laiyuan'
      })
    }
  },
  data () {
    return {
      loading: false,
      items: []
    }
  },
  created() {
    this.$parent.show = true;
    this.$parent.isScroll = true;
  }
}
</script>

<style>
.infinite-scroll-preloader {
  margin-top: -20px;
}
</style>

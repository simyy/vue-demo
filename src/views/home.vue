<template>
<div class="content list" v-infinite-scroll="loadMore">
  <div class="list-block infinite-list">
    <ul>
      <li class="item-content" v-for="item in items">
        <div class="item-cate">{{item.cate}}</div>
        <div class="item-img">{{item.img}}</div>
        <div class="item-box">
          <div class="item-title">{{item.title}}</div>
          <div class="item-source">{{item.source}}</div>
        </div>
      </li>
    </ul>
  </div>

  <transition name="fade">
  <div class="infinite-scroll-preloader" v-if="loading">
    <div class="preloader"></div>
  </div>
  </transition>
</div>
</template>

<script>
import $ from 'zepto'

export default {
  data: function() {
    return {
      loading: false,
      items: []
    }
  },
  created: function() {
    this.$parent.show = true;
  },
  mounted: function() {
    this.$nextTick(function() {
      for (let i = 0; i < 15; i++) {
        this.items.push({
          cate: i + 'LOL',
          img: 'img',
          title: '标题',
          source: 'laiyuan'
        })
      }
    })
  },
  methods: {
    loadMore() {
      if (this.loading) {
        return;
      }

      var _this = this;
      this.loading = true;
      setTimeout(function() {
        console.log('start load')
        let i = _this.length;
        for (let j = _this.length; j < i + 15; j++) {
          _this.items.push({
            cate: j + 'LOL',
            img: 'img',
            title: '标题',
            source: 'laiyuan'
          })
        }
        _this.loading = false;
        console.log('start end')
      }, 1500);
    }
  },
  computed: {
    length() {
      return this.items.length
    }
  }
}
</script>

<style>
.infinite-scroll-preloader {
  margin-top: -20px;
}

.list-block .item-content {
  padding: 0rem;
}

.item-cate {
  width: 2rem;
  background-color: red;
}

.item-img {
  width: 3rem;
  background-color: yellow;
}

.item-box {
  flex: 1;
  display: flex;
  padding: 0px;
}

.item-title {
  flex: 1;
  background-color: grey;
}

.item-source {
  width: 2rem;
  background-color: blue;

}

</style>

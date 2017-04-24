<template>
<div class="content list" v-infinite-scroll="loadMore">
  <div class="list-block infinite-list">
    <ul>
      <li class="item-content" v-for="item in items">
        <div class="item-img"><img :src="item.img"/></div>
        <div class="item-box">
          <div class="item-title">{{item.title}}</div>
          <div class="item-subtitle">
            <Mlabel :text='item.cate' kind='warn'/>
            <div class="item-source">{{item.source}}</div>
          </div>
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
import Mlabel from '../components/Label'

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
          img: '/static/img/avatar.jpg',
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
            img: '/static/img/avatar.jpg',
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
  },
  components: {
    Mlabel
  }
}
</script>

<style>
.list-block {
  margin: 0rem 0rem 1.75rem 0rem;
}

.infinite-scroll-preloader {
  margin-top: -20px;
}

.list-block .item-content {
  padding: 0rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.item-cate {
  width: 2.5rem;
}

.item-img {
  width: 3rem;
  height: 3rem;
  position: relative;overflow:hidden;
}

.item-img img {
  height: 2.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.item-box {
  flex: 1;
  display: flex;
  padding: 0px;
  flex-direction: column;
}

.item-title {
  flex: 1;
  font-size: 1rem;
}

.item-subtitle {
  flex: 1;
  display: flex;
  flex-direction: row;
  font-size: 0.7rem;
}

.item-source {
  width: 2rem;
}

</style>

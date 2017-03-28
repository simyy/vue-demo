<template>
  <div class="container">
    <nav class="bar bar-nav">
      <p class="title">滚动加载更多</p>
    </nav>
    <div class="content list"
    v-infinite-scroll="loadMore">
      <div class="list-block infinite-list list-items">
        <ul>
          <li class="item-content item-content-line" v-for="item in items" track-by="$index">
            <div class="item-media"><img src="../assets/img/avatar.jpg"/></div>
            <div class="item-inner">
              <div class="item-desc">
                  <div class="item-desc-title">2018春季DOTA联赛LGD VSEHOOM</div>
                <div class="item-desc-content">
                    <div class="item-desc-item">2009</div>
                    <div class="item-desc-item">{{item.name}}</div>
                </div>
              </div>
            </div>
            <div class="item-up">围观</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {loader} from '../util/util'
import $ from 'zepto'

export default {
  route: {
    data ({to, next}) {
      next()
    }
  },
  ready () {
    for (let i = 0; i < 15; i++) {
      this.items.push({
        id: i,
        name: `LOL${i + 1}`
      })
    }
  },
  data () {
    return {
      items: [],
      loading: false
    }
  },
  computed: {
    length () {
      return this.items.length
    }
  },
  methods: {
    loadMore () {
      if (this.loading) {
        return
      }
      this.loading = true
      let scroller = $('.list')
      loader.show()
      setTimeout(() => {
        let i = this.length
        this.items.push({
          id: i,
          name: `demo${i + 1}`
        })
        let scrollTop = scroller[0].scrollHeight - scroller.height() - 20
        scroller.scrollTop(scrollTop)
        this.loading = false
        loader.hide()
      }, 1500)
    }
  }
}
</script>

<style scoped>
.list-block {
  margin: .5rem 0;
}
.list {
  bottom: 2.5rem;
  padding-bottom: 1rem;
}
</style>

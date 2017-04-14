<template>
  <div class="container">
    <div class="content list"
    v-infinite-scroll="loadMore">
      <div class="list-block infinite-list list-items">
        <ul>
            <li class="item-content item-content-line" v-for="item in items" track-by="$index">
            <div class="item-media"><img src="{{item.avatar}}"/></div>
            <div class="item-inner">
              <div class="item-desc">
                <div class="item-desc-title">{{item.name}}-{{item.title}}</div>
                <div class="item-desc-content">
                    <div class="item-desc-item">{{item.game}}</div>
                    <div class="item-desc-item">{{item.audience}}</div>
                    <div class="item-desc-item">{{item.source}}</div>
                </div>
              </div>
            </div>
            <div class="item-up"><a href="{{item.url}}">围观</a></div>
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
        name: `LOL${i + 1}`,
        avatar: 'static/img/avatar.jpg',
        title: 'title',
        game: 'game',
        audience: '80000',
        source: '熊猫TV',
        url: 'http://dinglive.com'
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
    },
    onclick (i) {
      document.getElementById(i).click()
    }
  }
}
</script>

<style scoped>
.list-block {
}
.list {
  bottom: 2.5rem;
  padding-bottom: 1rem;
}
</style>

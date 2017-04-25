<template>
<div>
  <div v-for="item in items">
    <Card :title="item.title" :items="item.sub_items"></Card>
  </div>
</div>
</template>


<script>
import $ from 'zepto'
import Card from '../components/Card'

export default {
  data () {
    return {
      items: [
        { title: '标题1', sub_items: ['分类1', '分类2'] },
        { title: '标题2', sub_items: ['分类3', '分类4'] }
      ]
    
    }
  },
  created()  {
    this.$parent.show = false;
  },
  components: {
    Card
  }
}
</script>

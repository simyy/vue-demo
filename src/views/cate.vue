<template>
  <div>
    {{message}}
  </div>
</template>


<script>
import $ from 'zepto'

export default {
  ready () {

  },
  data () {
    return {
      message: 'this is cate',
      isIndex: false
    }
  },
  created()  {
    this.$parent.show = false
  }
}
</script>

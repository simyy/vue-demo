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
      message: 'this is home'
    }
  },
  created() {
    this.$parent.show = true
  }
}
</script>

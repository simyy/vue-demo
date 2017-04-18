<template>
<div class="content native-scroll">
  <div>
    {{message}}
  </div>
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
  }
}
</script>

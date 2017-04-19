<template>
  <router-link v-on:click.native="change()" class="tab-item external" :to="{path: path}" active-class="active" exact>
    <span class="icon" :class="iconClass"></span>
    <span class="tab-label" v-text="label"></span>
  </router-link>
</template>

<script>
import $ from 'zepto'

export default {
  props: {
    path: '',
    icon: '',
    label: ''
  },
  computed: {
    iconClass () {
      return `icon-${this.icon}`
    }
  },
  methods: {
    change: function() {
      console.log(this.path)
      if (this.path == '/cate') {
        $('#search-bar').css('display', 'none');
      } else {
        $('#search-bar').show('display', '');
      }
    }
  }
}
</script>

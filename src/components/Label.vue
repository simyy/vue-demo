<template>
<span class="m-label" :style="colorStyle">
  {{ text }}
</span>
</template>

<script>
import $ from 'zepto'

export default {
  props: {
    text: '',
    kind: ''
  },
  computed: {
    colorStyle() {
      if (this.kind === 'success') {
        return "background-color: #5cb85c";
      }

      if (this.kind === 'danger') {
        return "background-color: #d9534f";
      }

      if (this.kind === 'warn') {
        return "background-color: #f0ad4e";
      }

      if (this.kind === 'info') {
        return "background-color: #5bc0de";
      }

      if (this.color === 'error') {
        return "background-color: #d9534f";
      }
      return "background-color: #777";
    }
  }
}
</script>

<style>
.m-label {
  color: #fff;
  display: inline;
  padding: .2rem .2rem .2rem .2rem;
  font-size: 75%;
  font-weight: bold;
  line-height: 1;
  color: @label-color;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25em;

  // Add hover effects, but only for links
  a& {
    &:hover,
    &:focus {
      color: @label-link-hover-color;
      text-decoration: none;
      cursor: pointer;
    }
  }

  // Empty labels collapse automatically (not available in IE8)
  &:empty {
    display: none;
  }

  // Quick fix for labels in buttons
  .btn & {
    position: relative;
    top: -1px;
  }
}
</style>

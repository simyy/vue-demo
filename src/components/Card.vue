<template>
<div class="card">
  <div class="card-header">{{title}}</div>
    <div class="card-content">
      <div class="card-content-inner">
        <div class="card-item" v-for="item in items">
          <span>{{item}}</span>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  props: {
    title: '',
    items: []
  }
}
</script>

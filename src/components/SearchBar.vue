<template>
  <div class="searchbar">
    <a class="searchbar-cancel">取消</a>
    <div class="search-input">
      <label class="icon icon-search" for="search"></label>
      <input type="search" id='search' :placeholder='pre'/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pre: '' 
  }
}
</script>

<script>
  export default {
    name: "Category",
    props: ['title']
  }
</script>

<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 设置插槽 -->
    <slot></slot>
  </div>
</template>

<style scoped>
  .category {
    width: 200px;
    height: 300px;
    background-color: skyblue;
  }

  .category h3 {
    text-align: center;
    background-color: orange;
  }

  img {
    width: 100%;
  }

  video {
    width: 100%;
  }
</style>
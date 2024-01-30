<script>
  export default {
    name: "Category",
    props: ['title'],
    data() {
      return {
        games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      }
    }
  }
</script>

<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 设置插槽 -->
    <slot :games="games">我是一些默认值，默认插槽</slot>
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

  h4 {
    text-align: center;
  }

  img {
    width: 100%;
  }

  video {
    width: 100%;
  }
</style>
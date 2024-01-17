<script>
  import Search from "../22_插槽/01_src_默认插槽/components/Search.vue";
  import List from "../22_插槽/01_src_默认插槽/components/List.vue";

  export default {
    name: "App",
    components: {
      Search,
      List
    }
  }
</script>

<template>
  <div id="app">
    <div class="container">
      <Search></Search>
      <List></List>
    </div>
  </div>
</template>

<style>
</style>
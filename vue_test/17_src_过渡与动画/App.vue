<template>
  <div>
    <Test></Test>
    <Test2></Test2>
    <Test3></Test3>
    <Test4></Test4>
  </div>
</template>

<script>
  import Test from "../22_插槽/01_src_默认插槽/components/Test.vue";
  import Test2 from "../22_插槽/01_src_默认插槽/components/Test2.vue";
  import Test3 from "../22_插槽/01_src_默认插槽/components/Test3.vue";
  import Test4 from "../22_插槽/01_src_默认插槽/components/Test4.vue";

  export default {
    name: "App",
    components: {Test, Test2, Test3, Test4}
  }
</script>

<style scoped>

</style>
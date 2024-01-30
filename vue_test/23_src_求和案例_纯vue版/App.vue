<script>
  import Count from "@/components/Count.vue";

  export default {
    name: "App",
    components: {
      Count
    }
  }
</script>

<template>
  <div>
    <Count></Count>
  </div>
</template>

<style>
  .container, .footer {
    display: flex;
    justify-content: space-around;
  }
</style>
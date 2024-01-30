<script>
  import Count from "@/components/Count.vue";
  import Person from "@/components/Person.vue";

  export default {
    name: "App",
    components: {
      Count,
      Person
    }
  }
</script>

<template>
  <div>
    <Count></Count>
    <Person></Person>
  </div>
</template>

<style>
  .container, .footer {
    display: flex;
    justify-content: space-around;
  }
</style>
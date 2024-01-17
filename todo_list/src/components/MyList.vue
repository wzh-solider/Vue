<script>
  import MyItem from "@/components/MyItem.vue";

  export default {
    name: "MyList",
    components: {MyItem},
    // data() {
    //   return {
    //     todos: [
    //       {id: '001', title: "吃饭", completed: true},
    //       {id: '002', title: "睡觉", completed: false},
    //       {id: '003', title: "打豆豆", completed: true}
    //     ]
    //   }
    // }
    props: ['todos']
  }
</script>

<template>
  <ul class="todo-main">
    <MyItem v-for="todo in todos" :key="todo.id" :todo="todo"/>
  </ul>
</template>

<style scoped>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
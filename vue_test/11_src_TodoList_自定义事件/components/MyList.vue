<script>
  import MyItem from "../../22_插槽/01_src_默认插槽/components/MyItem.vue";

  export default {
    name: "MyList",
    components: {MyItem},
    props: ['todos', 'checkTodo', 'delTodo']
  }
</script>

<template>
  <ul class="todo-main">
    <MyItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        :checkTodo="checkTodo"
        :delTodo="delTodo"
    />
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
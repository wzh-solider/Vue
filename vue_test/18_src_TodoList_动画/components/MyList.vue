<script>
  import MyItem from "../../22_插槽/01_src_默认插槽/components/MyItem.vue";

  export default {
    name: "MyList",
    components: {MyItem},
    props: ['todos']
  }
</script>

<template>
  <ul class="todo-main">
    <transition-group name="todo">
      <MyItem
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
      />
    </transition-group>
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

  .todo-enter-active {
    animation: move 0.45s linear;
  }

  .todo-leave-active {
    animation: move 0.45s linear reverse;
  }

  @keyframes move {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
</style>
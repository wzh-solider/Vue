<script>
  import MyFooter from "@/components/MyFooter.vue";
  import MyList from "@/components/MyList.vue";
  import MyHeader from "@/components/MyHeader.vue";

  export default {
    name: "App",
    components: {
      MyHeader,
      MyList,
      MyFooter
    },
    data() {
      return {
        todos: JSON.parse(localStorage.getItem('todos_key')) || []
      }
    },
    methods: {
      addTodo(todo) {
        // console.log('我是App，我需要接收MyHeader组件的数据', data);
        this.todos.unshift(todo);
        // console.log(this.todos)
      },
      checkTodo(id) {
        const todo = this.todos.find(todo => todo.id === id);
        todo != null ?
            todo.completed = !todo.completed :
            alert('找不到id为' + id + '的todo');
      },
      delTodo(id) {
        // 删除指定id的todo对象
        this.todos = this.todos.filter(todo => todo.id !== id);
      },
      // 全选或全不选
      checkAllTodos(completed) {
        this.todos.forEach(todo => todo.completed = completed);
      },
      clearAllTodos() {
        this.todos = this.todos.filter(todo => !todo.completed)
      }
    },
    watch: {
      todos: {
        deep: true,
        handler() {
          localStorage.setItem('todos_key', JSON.stringify(this.todos));
        }
      }
    }
  }
</script>

<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo"/>
        <MyList :todos="todos"
                :checkTodo="checkTodo"
                :delTodo="delTodo"
        />
        <MyFooter
            :todos="todos"
            :checkAllTodos="checkAllTodos"
            :clearAllTodos="clearAllTodos"
        />
      </div>
    </div>
  </div>
</template>

<style>
  /*base*/
  body {
    background: #fff;
  }
  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }
  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }
  .btn:focus {
    outline: none;
  }
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
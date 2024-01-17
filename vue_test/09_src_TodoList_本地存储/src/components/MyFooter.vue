<script>
  export default {
    name: "MyFooter",
    props: ['todos', 'checkAllTodos', 'clearAllTodos'],
    computed: {
      total() {
        return this.todos.length;
      },
      completedTotal() {
        // let count = 0;
        // this.todos.forEach(todo => {
        //   if (todo.completed) count++;
        // });
        // return count;
        return this.todos.reduce((pre, todo) => pre + (todo.completed ? 1 : 0), 0)
      },
      isAll: {
        get() {
          return this.total === this.completedTotal && this.total > 0;
        },
        set(value) {
          this.checkAllTodos(value);
        }
      }
    },
    methods: {
      // checkAll(e) {
      //   // console.log(e.target.checked);
      //   this.checkAllTodos(e.target.checked);
      // },
      clearAll() {
        this.clearAllTodos();
      }
    }
  }
</script>

<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!--<input type="checkbox" :checked="isAll" @click="checkAll"/>-->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
          <span>已完成{{ completedTotal }}</span> / 全部{{ total }}
        </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
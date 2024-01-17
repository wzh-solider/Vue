<script>
  export default {
    name: "MyItem",
    methods: {
      handleCheck(id) {
        // console.log(id);
        // 通知App组件，进行completed的取反
        this.checkTodo(id);
      },
      handleDel(id) {
        // console.log(id);
        // 通知App组件，删除指定id的todo对象
        if (confirm('确定删除吗？')) {
          this.delTodo(id);
        }
      }
    },
    props: ['todo', 'checkTodo', 'delTodo']
  }
</script>

<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.completed" @change="handleCheck(todo.id)"/>
      <!-- 不建议使用v-model的双向绑定机制，对Vue无法监测改变的数据进行修改 -->
      <!--<input type="checkbox" v-model="todo.completed"/>-->
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDel(todo.id)">删除</button>
  </li>
</template>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover button {
    //background-color: #f5f5f5;
    display: block;
  }
</style>
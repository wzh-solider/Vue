<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">自定义组件事件</button>
    <br>
    <button @click="demo">触发自定义demo事件</button>
    <button @click="unbind">解绑事件</button>
  </div>
</template>

<script>
  export default {
    name: 'Student',
    data() {
      return {
        name: '张三',
        sex: '男'
      }
    },
    methods: {
      sendStudentName() {
        // 触发Student组件实例对象的atguigu事件
        this.$emit('atguigu', this.name);
      },
      demo() {
        this.$emit('demo');
      },
      unbind() {
        console.log('解绑事件');
        // this.$off('demo'); // 解绑单个事件
        // this.$off(['atguigu', 'demo']); // 解绑多个事件
        this.$off(); // 解绑所有事件
      }
    }
  }
</script>

<style lang="less" scoped>
  .student {
    background-color: pink;
    padding: 5px;
  }
</style>

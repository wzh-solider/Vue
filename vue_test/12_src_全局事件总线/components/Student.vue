<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">发送学生名给School组件</button>
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
        this.$bus.$emit('getStudentName', '李四');
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

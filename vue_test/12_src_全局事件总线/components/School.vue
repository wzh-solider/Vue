<template>
  <div class="school">
    <h2 class="title">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <h2 v-if="studentName">学生姓名：{{ studentName }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'School',
    data() {
      return {
        name: '尚硅谷atguigu',
        address: '北京',
        studentName: ''
      }
    },
    mounted() {
      this.$bus.$on('getStudentName', (name) => {
        this.studentName = name;
        console.log('School组件获取到了学生名：', name);
      })
    },
    beforeDestroy() {
      this.$bus.$off('getStudentName');
    }
  }
</script>

<style scoped>
  .school {
    background-color: skyblue;
    padding: 5px;
    margin-bottom: 5px;
  }
</style>
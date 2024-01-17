<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <School :getSchoolName="getSchoolName"/>
    <!--1、 <Student v-on:atguigu="getStudentName"/>-->
    <!--<Student @atguigu="getStudentName" @demo="m1"/>-->
    <!-- 原生DOM事件，需要使用native修饰 -->
    <Student ref="student" @click.native="alert('弹窗')"/>
  </div>
</template>

<script>
  import Student from './components/Student'
  import School from './components/School'

  export default {
    name: 'App',
    components: {School, Student},
    data() {
      return {
        msg: '你好啊！'
      }
    },
    methods: {
      getSchoolName(schoolName) {
        console.log("App组件收到了学校名称：", schoolName);
      },
      getStudentName(name) {
        console.log("App组件收到了学生名：", name);
      },
      m1() {
        console.log('demo事件触发了！');
      }
    },
    mounted() {
      // 3、通过$refs获取组件实例对象，然后通过$on监听自定义事件
      // this.$refs.studend.$on('atguigu', this.getStudentName);
    }
  }
</script>

<style scoped>
  .app {
    background-color: grey;
    padding: 5px;
  }
</style>

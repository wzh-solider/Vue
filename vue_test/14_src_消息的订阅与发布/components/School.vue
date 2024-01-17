<template>
  <div class="school">
    <h2 class="title">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <h2 v-if="studentName">学生姓名：{{ studentName }}</h2>
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'
  import {msg} from "@babel/core/lib/config/validation/option-assertions";

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
      // 订阅消息
      this.pubId = pubsub.subscribe('hello', (msgName, data) => {
        console.log(this)
        console.log('有人发送了hello消息，hello的回调执行了', msgName, data);
      })
    },
    beforeDestroy() {
      pubsub.unsubscribe(this.pubId);
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
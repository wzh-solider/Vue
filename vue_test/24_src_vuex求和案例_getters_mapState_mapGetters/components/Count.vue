<script>
  import {mapState, mapGetters} from "vuex";

  export default {
    name: "Count",
    data() {
      return {
        number: 1
      }
    },
    computed: {
      // sum() {
      //   return this.$store.state.sum;
      // },
      // bigSum() {
      //   return this.$store.getters.bigSum;
      // },
      // school() {
      //   return this.$store.state.school;
      // },
      // subject() {
      //   return this.$store.state.subject;
      // }

      // 1、借助mapState辅助函数，将state中的数据映射到计算属性中(对象写法)
      // ...mapState({
      //   sum: 'sum',
      //   school: 'school',
      //   subject: 'subject'
      // })

      // 2、借助mapState辅助函数，将state中的数据映射到计算属性中(数组写法)
      ...mapState(['sum', 'school', 'subject']),

      // ...mapGetters({bigSum: 'bigSum'}),
      ...mapGetters(['bigSum'])
    },
    methods: {
      increment() {
        this.$store.commit('INCREMENT', this.number);
      },
      decrement() {
        this.$store.commit('DECREMENT', this.number);
      },
      incrementOdd() {
        this.$store.dispatch('incrementOdd', this.number);
      },
      incrementWait() {
        this.$store.dispatch('incrementWait', this.number);
      }
    },
    mounted() {
      const x = mapState({
        sum: 'sum',
        bigSum: 'bigSum'
      });
      console.log(x)
    }
  }
</script>

<template>
  <div>
    <!--<h1>当前求和为：{{ $store.state.sum }}</h1>-->
    <!--<h1>当前求和放大十倍：{{ $store.getters.bigSum }}</h1>-->
    <!--<h1>我在{{$store.state.school}}，学习{{$store.state.subject}}</h1>-->
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和放大十倍：{{ bigSum }}</h1>
    <h1>我在{{ school }}，学习{{ subject }}</h1>
    <select v-model="number">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<style scoped>
  button {
    margin-left: 5px;
  }
</style>
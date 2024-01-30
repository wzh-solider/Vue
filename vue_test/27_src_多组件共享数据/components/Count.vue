<script>
  import {mapState, mapGetters, mapMutations, mapActions} from "vuex";

  export default {
    name: "Count",
    data() {
      return {
        number: 1
      }
    },
    computed: {
      ...mapState(['sum', 'school', 'subject', 'persons']),
      ...mapGetters(['bigSum'])
    },
    methods: {
      ...mapMutations(['INCREMENT', 'DECREMENT']),
      ...mapActions(['incrementOdd', 'incrementWait'])
    },
    mounted() {
      // const x = mapState({
      //   sum: 'sum',
      //   bigSum: 'bigSum'
      // });
      // console.log(x)
    }
  }
</script>

<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和放大十倍：{{ bigSum }}</h1>
    <h1>我在{{ school }}，学习{{ subject }}</h1>
    <select v-model="number">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="INCREMENT(number)">+</button>
    <button @click="DECREMENT(number)">-</button>
    <button @click="incrementOdd(number)">当前和为奇数再加</button>
    <button @click="incrementWait(number)">等一等再加</button>
    <h1>组件的总人数：{{ persons.length }}</h1>
  </div>
</template>

<style scoped>
  button {
    margin-left: 5px;
  }
</style>
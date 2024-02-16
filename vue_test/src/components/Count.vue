<script>
  export default {
    name: "Count",
    data() {
      return {
        number: 1
      }
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
    }
  }
</script>

<template>
  <div>
    <h1>当前求和为：{{ $store.state.sum }}</h1>
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
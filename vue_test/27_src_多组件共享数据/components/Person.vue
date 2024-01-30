<script>
  import {mapMutations, mapState} from 'vuex'
  export default {
    name: "Person",
    data() {
      return {
        name: ''
      }
    },
    computed: {
      ...mapState(['persons'])
    },
    methods: {
      ...mapMutations(['ADD_PERSON'])
    }
  }
</script>

<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="please enter your name" v-model="name"/>
    <button @click="ADD_PERSON(name)">添加</button>
    <ul>
      <li v-for="p in persons" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>
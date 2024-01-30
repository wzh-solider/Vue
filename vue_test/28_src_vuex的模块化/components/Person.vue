<script>
  import {mapState} from 'vuex'
  export default {
    name: "Person",
    data() {
      return {
        name: ''
      }
    },
    computed: {
      ...mapState('personAbout', ['persons'])
    },
    methods: {
      add() {
        this.$store.commit('personAbout/ADD_PERSON', this.name)
      },
      addPlus() {
        this.$store.dispatch('personAbout/addPersonServer', this.name)
      }
    }
  }
</script>

<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="please enter your name" v-model="name"/>
    <button @click="add">添加</button>
    <button @click="addPlus">添加+</button>
    <ul>
      <li v-for="p in persons" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>
<template>
  <div class="todo-list">
    <Header/>
    <List/>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'

export default {
    name: 'App',
    components: {
        Header,
        List,
        Footer
    }
}
</script>

<style>
    .todo-list {
        width: 500px;
        height: 300px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 10px;
        margin: 0 auto;
        margin-top: 200px;
    }
</style>
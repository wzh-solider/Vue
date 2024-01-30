<script>
  import Category from "./components/Category.vue";

  export default {
    name: "App",
    components: {
      Category
    }
  }
</script>

<template>
  <div class="container">
    <Category title="游戏">
      <template scope="atguigu">
        <ul>
          <li v-for="(g, index) in atguigu.games" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="{games}">
        <ol>
          <li v-for="(g, index) in games" :key="index">{{ g }}</li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template slot-scope="{games}">
        <h4 v-for="(g, index) in games" :key="index">{{ g }}</h4>
    </template>
    </Category>
  </div>
</template>

<style>
  .container, .footer {
    display: flex;
    justify-content: space-around;
  }
</style>
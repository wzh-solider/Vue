<script>
  import Category from "./components/Category.vue";

  export default {
    name: "App",
    components: {
      Category
    },
    data() {
      return {
        foods: ['火锅', '烧烤', '小龙虾', '牛排'],
        games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
        films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》']
      }
    }
  }
</script>

<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="美食">
      <a slot="footer" href="http://www.atguigu.com">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div class="footer" slot="footer">
        <a href="#">单击游戏</a>
        <a href="#">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <video slot="center" controls src="http://vjs.zencdn.net/v/oceans.mp4" alt="电影"></video>
      <template v-slot:footer>
        <div class="footer">
          <a href="#">经典</a>
          <a href="#">热门</a>
          <a href="#">推荐</a>
        </div>
        <h4>欢迎前来观看</h4>
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
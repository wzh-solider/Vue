<script>
  export default {
    name: "List",
    data() {
      return {
        info: {
          isFirst: true,
          isLoading: false,
          errMsg: '',
          users: []
        }
      }
    },
    mounted() {
      this.$bus.$on('updateListData', (dataObj) => {
        this.info = {...this.info, ...dataObj};
      })
    },
    beforeDestroy() {
      this.$bus.$off('updateListData');
    }
  }
</script>

<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <div  v-show="info.users.length" class="card" v-for="user in info.users" :key="user.id">
      <a :href="user.url" target="_blank">
        <img :src="user.image" style='width: 100px' :alt="user.name"/>
      </a>
      <p class="card-text">{{ user.name }}</p>
    </div>
  <!-- 展示欢迎词 -->
    <h1 v-show="info.isFirst">欢迎使用！</h1>
  <!-- 展示加载中 -->
    <h1 v-show="info.isLoading">加载中...</h1>
  <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
  </div>
</template>

<style scoped>
  .album {
    min-height: 50rem; /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
  }

  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
<script>
  import axios from "axios";

  export default {
    name: "Search",
    data() {
      return {
        name: ''
      }
    },
    methods: {
      getUsersInfo() {
        // 请求前更新List数据
        this.$bus.$emit('updateListData', {
          isFirst: false,
          isLoading: true,
          errMsg: '',
          users: []
        })
        // 发送请求
        axios.get(`https://api.github.com/search/users?q=${this.name}`).then(
            response => {
              console.log("请求成功：", response.data);
              this.$bus.$emit('updateListData', {
                isLoading: false,
                errMsg: false,
                users: response.data.items.map(item => {
                  return {
                    id: item.id,
                    name: item.login,
                    url: item.html_url,
                    image: item.avatar_url
                  }
                })
              });
            },
            error => {
              console.log("请求失败：", error.message);
              this.$bus.$emit('updateListData', {
                isLoading: false,
                errMsg: error.message,
                users: []
              });
            }
        )
      }
    }
  }
</script>

<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="name"/>&nbsp;<button @click="getUsersInfo">
      Search
    </button>
    </div>
  </section>
</template>

<style scoped>

</style>
<template>
  <div class="item">
    <input type="checkbox">
    <span>打代码</span>
    <button class="del">删除</button>
  </div>
</template>

<script>
export default {
    name: 'Item'
}
</script>

<style scoped>
    .item {
        height: 40px;
        /* background-color: green; */
        line-height: 40px;
        border: 1px solid grey;
        border-bottom: none;
        box-sizing: border-box;
    }
    .item:last-child {
        border-bottom: 1px solid grey;
    }
    .item input {
        margin-left: 10px;
        margin-right: 10px;
    }
    .item span {
        font-size: 15px;
    }
    .item .del {
        float: right;
        width: 50px;
        height: 30px;
        color: white;
        background-color: red;
        border-radius: 5px;
        margin: 5px;
    }
</style>
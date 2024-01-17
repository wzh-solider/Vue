<template>
  <div class="header">
    <input type="text">
  </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    .header {
        margin-bottom: 10px;
    }

    input {
        width: 100%;
        height: 30px;
        border: 1px solid #ccc;
        border-radius: 5px;
        outline: none;
        transition: all 0.1s linear;
        box-sizing: border-box;
    }

    input:focus {
        border: 1px solid skyblue;
        box-shadow: 0 0 3px skyblue;
    }
</style>
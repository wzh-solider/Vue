<template>
  <div class="list">
    <Item v-for="i in items" :key="i" :index="i"/>
  </div>
</template>

<script>
import Item from './Item.vue'
export default {
    name: 'List',
    components: {
        Item
    },
    data() {
        return {
            items: 3
        }
    }
}
</script>

<style scoped>
</style>
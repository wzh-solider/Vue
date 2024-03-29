// 该文件用于创建整个应用的路由器
import VueRouter from "vue-router";
import About from "@/components/About.vue";
import Home from "@/components/Home.vue";

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home
        }
    ]
})
// 该文件创建Vuex中的store

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 使用Vuex插件
Vue.use(Vuex)
// 用于响应组件中的动作
const actions = {
    // increment(context, value) {
    //     console.log('actions中的increment被调用了');
    //     context.commit('INCREMENT', value);
    // },
    // decrement(context, value) {
    //     console.log('actions中的decrement被调用了');
    //     context.commit('DECREMENT', value);
    // }
    incrementOdd(context, value) {
        console.log('actions中的incrementOdd被调用了');
        if (context.state.sum % 2) {
            context.commit('INCREMENT', value);
        }
    },
    incrementWait(context, value) {
        console.log('actions中的incrementWait被调用了, 等待500ms');
        setTimeout(() => {
            context.commit('INCREMENT', value);
        }, 500);
    }
}
// 用于加工数据(state)
const mutations = {
    INCREMENT(state, value) {
        console.log('mutations中的increment被调用了');
        state.sum += value;
    },
    DECREMENT(state, value) {
        console.log('mutations中的decrement被调用了');
        state.sum -= value;
    }
}
// 用于存储数据
const state = {
    sum: 0
}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})

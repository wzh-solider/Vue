// 该文件创建Vuex中的store

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
import {nanoid} from "nanoid";
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
    },
    ADD_PERSON(state, name) {
        console.log('mutations中的add被调用了');
        let person = {
            id: nanoid(),
            name: name
        }
        state.persons.unshift(person);
    }
}
// 用于存储数据
const state = {
    sum: 0,
    school: '尚硅谷',
    subject: '前端',
    persons: [
        {id: '001', name: '张三'},
        {id: '002', name: '李四'},
        {id: '003', name: '王五'},
        {id: '004', name: '赵六'}
    ]
}
// 准备getters用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10;
    }
}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

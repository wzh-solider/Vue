// 求和相关配置
export default {
    // 开启命名空间
    namespaced: true,
    actions: {
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
    },
    mutations: {
        INCREMENT(state, value) {
            console.log('mutations中的increment被调用了');
            state.sum += value;
        },
        DECREMENT(state, value) {
            console.log('mutations中的decrement被调用了');
            state.sum -= value;
        }
    },
    state: {
        sum: 0,
        school: '尚硅谷',
        subject: '前端'
    },
    getters: {
        bigSum(state) {
            return state.sum * 10;
        }
    }
}
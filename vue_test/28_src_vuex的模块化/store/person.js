// 人员管理相关配置
import {nanoid} from "nanoid";
import axios from "axios";

export default {
    namespaced: true,
    actions: {
        addPersonServer(context) {
            axios.get('http://localhost:8080/person').then(
                response => {
                    console.log(response.data);
                    context.commit('ADD_PERSON', response.data);
                },
                error => {
                    console.log(error);
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, name) {
            console.log('mutations中的add被调用了');
            let person = {
                id: nanoid(),
                name: name
            }
            state.persons.unshift(person);
        }
    },
    state: {
        persons: [
        ]
    },
    getters: {}
}
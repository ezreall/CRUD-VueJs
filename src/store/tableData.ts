import { State } from '../store/type'
import { MutationTree, ActionTree } from 'vuex'
export  const state: State = {
    tableData: [
        {
            id: 1,
            name: "Tom",
            address: "No. 189, Grove St, Los Angeles",
            phone: "0987587663",
            age: "22"
        },
        {
            id: 2,
            name: "Meo",
            address: "No. 189, Grove St, Los Angeles",
            phone: "0987587663",
            age: "22"
        },
        {
            id: 3,
            name: "Mun",
            address: "No. 189, Grove St, Los Angeles",
            phone: "0987587663",
            age: "32"
        },
        {
            id: 4,
            name: "Mom",
            address: "No. 189, Grove St, Los Angeles",
            phone: "0987587663",
            age: "23"
        }
    ]
}

export const actions: ActionTree<State, any> = {}

export const mutations: MutationTree<State> = {}

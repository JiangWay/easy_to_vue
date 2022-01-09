import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        uBikeList: []
    },
    mutations: {
        setUBikeList(state, {uBikeList}) {
            state.uBikeList = uBikeList
        }
    },
    actions: {
        async getUBikeList({commit}) {
            try {
                const res = await axios.get("https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json")
                const uBikeList = res.data
                commit('setUBikeList', uBikeList)
            } catch (error) {
                console.log(error)
            }
        }
    },
    modules: {}
})

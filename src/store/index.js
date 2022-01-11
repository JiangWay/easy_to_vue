import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        uBikeList: []
    },
    mutations: {
        setUBikeList(state, uBikeList) {
            state.uBikeList = uBikeList
        }
    },
    actions: {
        async fetchUBikeList({commit}) {
            try {
                const res = await axios.get("https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json")
                const uBikeList = res.data
                commit('setUBikeList', uBikeList)
                return uBikeList
            } catch (error) {
                console.log('fetchUBikeList error = ',error)
            }
        }
    },
    getters:{
        // 只顯示前10筆
        getUBikeList(state){
            return state.uBikeList
        },
        doUBikePagination(state,getters) {
            // 一頁有幾筆(1開始) ,第幾頁(1開始)
            return (page ,index)=>{
                if(page <1 || index < 1){return []}
                const start = page*(index-1)
                const end = page*(index)
                if(getters.getUBikeList && getters.getUBikeList.length>0){
                    return getters.getUBikeList.slice(start,end)
                }else{
                    return []
                }
            }
        }
    },
    modules: {}
})

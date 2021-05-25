import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import cartM from './modules/cart'
Vue.use(Vuex)

const store =new Vuex.Store({
  state:{},
  getters:{},
  mutations,
  actions,
  modules:{
    a:cartM
  }
})

export default store
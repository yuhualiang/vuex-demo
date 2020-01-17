import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  getters
})

export default store
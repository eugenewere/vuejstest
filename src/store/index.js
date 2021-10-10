import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: '1', name: 'eugene' },
    categories: ['2BHK', '3BHK', '4BHK'],
  },
  mutations: {},
  actions: {},
  modules: {},
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
  },
  state: {
    placeSelected: '北京'
  },
  mutations: {
    UpdatePlaceSelected (state, StrPlace) {
      state.placeSelected = StrPlace
    }
  }
})

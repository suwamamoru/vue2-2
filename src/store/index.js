import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sexQuestion: '',
    birthDayQuestion: '',
    closeQuestion1: '',
    closeQuestion2: '',
    closeQuestion3: '',
    answer: ''
  },
  mutations: {
    'sexChangeManMutation'(state) {
      state.sexQuestion = '男性'
    },
    'sexChangeWomanMutation'(state) {
      state.sexQuestion = '女性'
    }
  },
  actions: {
    sexChangeManAction: ({commit}) => {
      commit('sexChangeManMutation')
    },
    sexChangeWomanAction: ({commit}) => {
      commit('sexChangeWomanMutation')
    }
  },
  getters: {
    currentSexQuestion: state => {
      return state.sexQuestion
    }
  }
})

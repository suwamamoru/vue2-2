import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sex: '',
    year: '2000',
    month: '1',
    day: '1',
    question1: '',
    question2: '',
    question3: '',
    answer: ''
  },
  mutations: {
    setSex (state, sex) {
      state.sex = sex
    },
    setYear (state, year) {
      state.year = year
    },
    setMonth (state, month) {
      state.month = month
    },
    setDay (state, day) {
      state.day = day
    },
    setQuestion1 (state, question1) {
      state.question1 = question1
    },
    setQuestion2 (state, question2) {
      state.question2 = question2
    },
    setQuestion3 (state, question3) {
      state.question3 = question3
    },
    setAnswer (state, answer) {
      state.answer = answer
    }
  },
  actions: {
    getSex: ({commit}, sex) => {
      commit('setSex', sex)
    },
    getYear: ({commit}, year) => {
      commit('setYear', year)
    },
    getMonth: ({commit}, month) => {
      commit('setMonth', month)
    },
    getDay: ({commit}, day) => {
      commit('setDay', day)
    },
    getQuestion1: ({commit}, question1) => {
      commit('setQuestion1', question1)
    },
    getQuestion2: ({commit}, question2) => {
      commit('setQuestion2', question2)
    },
    getQuestion3: ({commit}, question3) => {
      commit('setQuestion3', question3)
    },
    getAnswer: ({commit}, answer) => {
      commit('setAnswer', answer)
    }
  },
  getters: {
    sex: state => {
      return state.sex
    },
    year: state => {
      return state.year
    },
    month: state => {
      return state.month
    },
    day: state => {
      return state.day
    },
    question1: state => {
      return state.question1
    },
    question2: state => {
      return state.question2
    },
    question3: state => {
      return state.question3
    },
    answer: state => {
      return state.answer
    }
  }
})

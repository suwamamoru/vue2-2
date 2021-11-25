import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sexQuestion: '',
    year: '',
    month: '',
    day: '',
    closeQuestion1: '',
    closeQuestion2: '',
    closeQuestion3: '',
    answer: ''
  },
  mutations: {
    sexChangeManMutation (state) {
      state.sexQuestion = '男性'
    },
    sexChangeWomanMutation (state) {
      state.sexQuestion = '女性'
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
    closeQuestionYesMutation1 (state) {
      state.closeQuestion1 = 'はい'
    },
    closeQuestionNoMutation1 (state) {
      state.closeQuestion1 = 'いいえ'
    },
    closeQuestionYesMutation2 (state) {
      state.closeQuestion2 = 'はい'
    },
    closeQuestionNoMutation2 (state) {
      state.closeQuestion2 = 'いいえ'
    },
    closeQuestionYesMutation3 (state) {
      state.closeQuestion3 = 'はい'
    },
    closeQuestionNoMutation3 (state) {
      state.closeQuestion3 = 'いいえ'
    },
    setAnswer (state, answer) {
      state.answer = answer
    }
  },
  actions: {
    sexChangeManAction: ({commit}) => {
      commit('sexChangeManMutation')
    },
    sexChangeWomanAction: ({commit}) => {
      commit('sexChangeWomanMutation')
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
    closeQuestionYesAction1: ({commit}) => {
      commit('closeQuestionYesMutation1')
    },
    closeQuestionNoAction1: ({commit}) => {
      commit('closeQuestionNoMutation1')
    },
    closeQuestionYesAction2: ({commit}) => {
      commit('closeQuestionYesMutation2')
    },
    closeQuestionNoAction2: ({commit}) => {
      commit('closeQuestionNoMutation2')
    },
    closeQuestionYesAction3: ({commit}) => {
      commit('closeQuestionYesMutation3')
    },
    closeQuestionNoAction3: ({commit}) => {
      commit('closeQuestionNoMutation3')
    },
    getAnswer: ({commit}, answer) => {
      commit('setAnswer', answer)
    }
  },
  getters: {
    currentSexQuestion: state => {
      return state.sexQuestion
    },
    currentYear: state => {
      return state.year
    },
    currentMonth: state => {
      return state.month
    },
    currentDay: state => {
      return state.day
    },
    currentCloseQuestion1: state => {
      return state.closeQuestion1
    },
    currentCloseQuestion2: state => {
      return state.closeQuestion2
    },
    currentCloseQuestion3: state => {
      return state.closeQuestion3
    },
    answer: state => {
      return state.answer
    }
  }
})

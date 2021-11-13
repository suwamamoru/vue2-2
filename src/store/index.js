import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sexQuestion: '',
    birthDayQuestion: {
      year: '',
      month: '',
      day: ''
    },
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
    getDaysMutation (state) {
      state.birthDayQuestion.year = ''
      state.birthDayQuestion.month = ''
      state.birthDayQuestion.day = ''
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
    answerMutation (state) {
      state.answer = ''
    }
  },
  actions: {
    sexChangeManAction: ({commit}) => {
      commit('sexChangeManMutation')
    },
    sexChangeWomanAction: ({commit}) => {
      commit('sexChangeWomanMutation')
    },
    getDaysAction: ({commit}) => {
      commit('getDaysMutation')
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
    answerAction: ({commit}) => {
      commit('answerMutation')
    }
  },
  getters: {
    currentSexQuestion: state => {
      return state.sexQuestion
    },
    currentBirthDayQuestion: state => {
      return state.birthDayQuestion
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
    currentAnswer: state => {
      return state.answer
    }
  }
})

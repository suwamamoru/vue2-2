import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sexList: [
      {id: 1, selection: man},
      {id: 2, selection: woman}
    ],
    birthDayList: [
      {id: 1, selection: year},
      {id: 2, selection: month},
      {id: 3, selection: day}
    ],
    closeQuestionList:[
      {id: 1, selection: yes},
      {id: 2, selection: no}
    ],
    questionnaireList: [
      {id: 1, selection: '現在、生命保険に加入されていますか？'},
      {id: 2, selection: '現在入院中ですか。または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？'},
      {id: 3, selection: '過去５年以内に、病気やけがで、手術を受けたことまたは継続して７日以上の入院をしたことがありますか？'}
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

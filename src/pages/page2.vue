<template>
  <div class="page2">
    <p>STEP2</p>
    <div>
      <p>{{questionnaire[0]}}</p>
      <input type="radio" name="radio0" value="yes" @click="nextQuestion1" v-model="pickedQuestion">はい
      <input type="radio" name="radio0" value="no" @click="nextQuestion1" v-model="pickedQuestion">いいえ
    </div>
    <div v-show="isShow1">
      <p>{{questionnaire[1]}}</p>
      <input type="radio" name="radio1" value="yes" @click="nextQuestion2" v-model="pickedQuestion">はい
      <input type="radio" name="radio1" value="no" @click="nextQuestion2" v-model="pickedQuestion">いいえ
    </div>
    <div v-show="isShow2">
      <p>{{questionnaire[2]}}</p>
      <input type="radio" name="radio2" value="yes" v-model="pickedQuestion">はい
      <input type="radio" name="radio2" value="no" v-model="pickedQuestion">いいえ
    </div>
    <router-link to="/">前に戻る</router-link>
    <router-link to="/page3">次へ進む</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questionnaire: [
        '現在、生命保険に加入されていますか？',
        '現在入院中ですか。または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？',
        '過去５年以内に、病気やけがで、手術を受けたことまたは継続して７日以上の入院をしたことがありますか？'
      ],
      isShow1: false,
      isShow2: false,
      pickedQuestion: []
    }
  },
  methods: {
    nextQuestion1: function () {
      this.isShow1 = true
    },
    nextQuestion2: function () {
      this.isShow2 = true
    }
  }
}
</script>


<template>
  <div class="page2">
    <p>STEP2</p>
    <div>
      <p>{{questionnaire[0]}}</p>
      <input type="radio" name="radio0" value="yes" @click="nextQuestion1" v-model="pickedQuestion1" @change="closeQuestionChange1">はい
      <input type="radio" name="radio0" value="no" @click="nextQuestion1" v-model="pickedQuestion1" @change="closeQuestionChange1">いいえ
    </div>
    <div v-show="isShow1">
      <p>{{questionnaire[1]}}</p>
      <input type="radio" name="radio1" value="yes" @click="nextQuestion2" v-model="pickedQuestion2" @change="closeQuestionChange2">はい
      <input type="radio" name="radio1" value="no" @click="nextQuestion2" v-model="pickedQuestion2" @change="closeQuestionChange2">いいえ
    </div>
    <div v-show="isShow2">
      <p>{{questionnaire[2]}}</p>
      <input type="radio" name="radio2" value="yes" v-model="pickedQuestion3" @change="closeQuestionChange3">はい
      <input type="radio" name="radio2" value="no" v-model="pickedQuestion3" @change="closeQuestionChange3">いいえ
    </div>
    <p>{{currentCloseQuestion1}}</p>
    <p>{{currentCloseQuestion2}}</p>
    <p>{{currentCloseQuestion3}}</p>
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
      pickedQuestion1: [],
      pickedQuestion2: [],
      pickedQuestion3: []
    }
  },
  computed: {
    currentCloseQuestion1() {
      return this.$store.getters.currentCloseQuestion1
    },
    currentCloseQuestion2() {
      return this.$store.getters.currentCloseQuestion2
    },
    currentCloseQuestion3() {
      return this.$store.getters.currentCloseQuestion3
    }
  },
  created() {
    this.closeQuestionChange1()
    this.closeQuestionChange2()
    this.closeQuestionChange3()
  },
  methods: {
    nextQuestion1: function () {
      this.isShow1 = true
    },
    nextQuestion2: function () {
      this.isShow2 = true
    },
    closeQuestionChange1: function() {
      if (this.pickedQuestion1 === 'yes') {
        this.$store.dispatch("closeQuestionYesAction1")
      } else if (this.pickedQuestion1 === 'no') {
        this.$store.dispatch("closeQuestionNoAction1")
      }
    },
    closeQuestionChange2: function() {
      if (this.pickedQuestion2 === 'yes') {
        this.$store.dispatch("closeQuestionYesAction2")
      } else if (this.pickedQuestion2 === 'no') {
        this.$store.dispatch("closeQuestionNoAction2")
      }
    },
    closeQuestionChange3: function() {
      if (this.pickedQuestion3 === 'yes') {
        this.$store.dispatch("closeQuestionYesAction3")
      } else if (this.pickedQuestion3 === 'no') {
        this.$store.dispatch("closeQuestionNoAction3")
      }
    }
  }
}
</script>


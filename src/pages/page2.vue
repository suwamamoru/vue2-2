<template>
  <div class="page2">
    <p>STEP2</p>
    <div>
      <p>{{questionnaire[0]}}</p>
      <input type="radio" name="radio0" value="はい" v-model="question1">はい
      <input type="radio" name="radio0" value="いいえ" v-model="question1">いいえ
    </div>
    <div v-show="question1">
      <p>{{questionnaire[1]}}</p>
      <input type="radio" name="radio1" value="はい" v-model="question2">はい
      <input type="radio" name="radio1" value="いいえ" v-model="question2">いいえ
    </div>
    <div v-show="question2">
      <p>{{questionnaire[2]}}</p>
      <input type="radio" name="radio2" value="はい" v-model="question3">はい
      <input type="radio" name="radio2" value="いいえ" v-model="question3">いいえ
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
      ]
    }
  },
  computed: {
    question1: {
      get() {
        return this.$store.getters.question1
      },
      set(value) {
        this.$store.dispatch("getQuestion1", value)
      }
    },
    question2: {
      get() {
        return this.$store.getters.question2
      },
      set(value) {
        this.$store.dispatch("getQuestion2", value)
      }
    },
    question3: {
      get() {
        return this.$store.getters.question3
      },
      set(value) {
        this.$store.dispatch("getQuestion3", value)
      }
    }
  }
}
</script>


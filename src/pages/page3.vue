<template>
  <div class="page3">
    <p>STEP3</p>
    <div>
      <p>- ご相談内容 -</p>
      <textarea v-model="answer" @input="answerInput"></textarea>
    </div>
    <p>{{currentAnswer}}</p>
    <router-link to="/page2">前に戻る</router-link>
    <router-link to="/page4">次へ進む</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      answer: ''
    }
  },
  computed: {
    currentAnswer() {
      return this.$store.getters.currentAnswer
    }
  },
  created() {
    this.answerInput()
  },
  methods: {
    answerInput: function() {
      this.$store.dispatch("answerAction")
    }
  }
}
</script>
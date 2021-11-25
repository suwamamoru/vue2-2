<template>
  <div class="page4">
    <p>STEP4</p>
    <h2>以下の内容をご確認ください</h2>
    <div>
      <p>性別</p>
      <p>{{$store.getters.currentSexQuestion}}</p>
      <p>生年月日</p>
      <p>{{$store.getters.currentYear}}年{{$store.getters.currentMonth}}月{{$store.getters.currentDay}}日</p>
      <p>現在、生命保険に加入されていますか？</p>
      <p>{{$store.getters.currentCloseQuestion1}}</p>
      <p>現在入院中ですか。または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
      <p>{{$store.getters.currentCloseQuestion2}}</p>
      <p>過去５年以内に、病気やけがで、手術を受けたことまたは継続して７日以上の入院をしたことがありますか？</p>
      <p>{{$store.getters.currentCloseQuestion3}}</p>
      <p>- ご相談内容 -</p>
      <p>{{$store.getters.answer}}</p>
    </div>
    <router-link to="/page3">前に戻る</router-link>
    <input type="submit" value="送信">
  </div>
</template>

<script>
export default {
  computed: {
    currentSexQuestion() {
      return this.$store.getters.currentSexQuestion
    },
    currentYear() {
      return this.$store.getters.currentYear
    },
    currentMonth() {
      return this.$store.getters.currentMonth
    },
    currentDay() {
      return this.$store.getters.currentDay
    },
    currentCloseQuestion1() {
      return this.$store.getters.currentCloseQuestion1
    },
    currentCloseQuestion2() {
      return this.$store.getters.currentCloseQuestion2
    },
    currentCloseQuestion3() {
      return this.$store.getters.currentCloseQuestion3
    },
    answer() {
      return this.$store.getters.answer
    }
  }
}
</script>
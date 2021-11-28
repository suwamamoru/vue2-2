<template>
  <div class="page4">
    <p>STEP4</p>
    <h2>以下の内容をご確認ください</h2>
    <div>
      <p>性別</p>
      <p>{{$store.getters.sex}}</p>
      <p>生年月日</p>
      <p>{{$store.getters.year}}年{{$store.getters.month}}月{{$store.getters.day}}日</p>
      <p>現在、生命保険に加入されていますか？</p>
      <p>{{$store.getters.question1}}</p>
      <p>現在入院中ですか。または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
      <p>{{$store.getters.question2}}</p>
      <p>過去５年以内に、病気やけがで、手術を受けたことまたは継続して７日以上の入院をしたことがありますか？</p>
      <p>{{$store.getters.question3}}</p>
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
    sex() {
      return this.$store.getters.sex
    },
    year() {
      return this.$store.getters.year
    },
    month() {
      return this.$store.getters.month
    },
    day() {
      return this.$store.getters.day
    },
    question1() {
      return this.$store.getters.question1
    },
    question2() {
      return this.$store.getters.question2
    },
    question3() {
      return this.$store.getters.question3
    },
    answer() {
      return this.$store.getters.answer
    }
  }
}
</script>
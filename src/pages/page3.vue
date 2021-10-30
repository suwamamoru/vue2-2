<template>
  <div class="page3">
    <p>STEP3</p>
    <div id="contents">
      <p>- ご相談内容 -</p>
      <textarea v-model="contents"></textarea>
    </div>
    <router-link to="/page2">前に戻る</router-link>
    <router-link to="/page4">次へ進む</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contents: ''
    }
  }
}
</script>
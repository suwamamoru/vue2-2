<template>
  <div class="page4">
    <p>STEP4</p>
    <div>
      <p>- ご相談内容 -</p>
      <p>{{$store.state.contents}}</p>
    </div>
    <router-link to="/page3">前に戻る</router-link>
    <input type="submit" value="送信">
  </div>
</template>

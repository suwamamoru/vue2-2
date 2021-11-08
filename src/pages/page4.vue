<template>
  <div class="page4">
    <p>STEP4</p>
    <h2>以下の内容をご確認ください</h2>
    <div>
      <p>性別</p>
      <p>{{$store.state.sexQuestion}}</p>
      <p>生年月日</p>
      <p>{{$store.state.birthQuestion}}</p>
      <p>現在、生命保険に加入されていますか？</p>
      <p>{{$store.state.closeQuestion1}}</p>
      <p>現在入院中ですか。または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
      <p>{{$store.state.closeQuestion2}}</p>
      <p>過去５年以内に、病気やけがで、手術を受けたことまたは継続して７日以上の入院をしたことがありますか？</p>
      <p>{{$store.state.closeQuestion3}}</p>
      <p>- ご相談内容 -</p>
      <p>{{$store.state.answer}}</p>
    </div>
    <router-link to="/page3">前に戻る</router-link>
    <input type="submit" value="送信">
  </div>
</template>

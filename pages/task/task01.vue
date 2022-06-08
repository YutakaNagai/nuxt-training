<template>
  <div>
    <div>
      <h1>Task</h1>
      <h2>トップメニューにContentsを表示させてみよう！</h2>
    </div>
    <div>
      <p>画面上部のメニューに、現在はHome, GitHub, Wok, Taskの4つが表示されているかと思います。</p>
      <p>components/NavigationBar.vueを参考に、Contentsを表示させてみましょう！</p>
      <p>アイコンにはstatic/contents.png, 押下時の遷移先URLにはpages/contents.vueを使用してください</p>
    </div>
    <div class="complete">
      <h3>完成イメージ</h3>
      <div class="image">
        <img src="~/static/task01.png" width="400"/>
      </div>
    </div>
    <div class="supplement">
      <h2>補足説明</h2>
      <p>vue.jsではコンポーネントという機能があります。</p>
      <p>コンポーネントを使うことで、同じ処理のアイテムを複数箇所、複数ページに設定することができます。</p>
    </div>
  </div>
</template>
<style>
h1 {
  background-color:palegreen;
}

.complete {
  margin-top: 30px;
  margin-bottom: 30px;
  border: solid;
}
.image {
  border: dotted;
  margin: 3%;
}
h2 {
  background-color: antiquewhite;
}
</style>
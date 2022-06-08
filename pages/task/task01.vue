<template>
  <div>
    <div>
      <h1>Task</h1>
      <h2>トップメニューにContentsを表示させてみよう！</h2>
    </div>
    <div>
      <p>画面上部のメニューに、現在はHome, GitHub, Work, Taskの4つが表示されているかと思います。</p>
      <p>components/NavigationBar.vueを参考に、Contentsを表示させてみましょう！</p>
      <p>アイコンにはstatic/contents.png, 押下時の遷移先URLにはpages/contents.vueを使用してください</p>
    </div>
    <div class="complete">
      <h3>完成イメージ</h3>
      <div class="image">
        <img src="~/static/task01.png" width="400"/>
      </div>
    </div>
    <div>
      <h2>課題の提出</h2>
      <h4>課題の提出は下記内容のPRを作成してください。</h4>
      <ul>
        <li>
          ブランチ名: 
          <p>fix_component</p>
        </li>
        <li>
          PRのタイトル名: 
          <p>課題01</p>
        </li>
        <li>
          PRの概要欄（自由記入）: 
          <p>難しかった点、実装したけど理解できていない点、参考にしたサイトなど</p>
        </li>
      </ul>
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
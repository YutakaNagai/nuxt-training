<template>
  <div>
    <div>
      <h1>Task</h1>
      <h2>layoutsを変更してみよう！</h2>
    </div>
    <div>
      <p>nuxtにはlayoutsという機能があります。</p>
      <p>layouts配下には、各ページ共通で利用可能な設定することができます。</p>
      <p>layouts/default.vueを書き換えて、このWEBページのタイトルを設定しましょう！</p>
      <p>画面遷移後も設定したタイトルが表示されていれば成功です。</p>
    </div>
    <div class="complete">
      <h3>完成イメージ</h3>
      <div class="image">
        <img src="~/static/task02.png" width="400"/>
      </div>
    </div>
    <div class="supplement">
      <h2>補足説明</h2>
      <p>layoutsにはさまざまなテンプレートを保管しておくことができます。</p>
      <p>PC/SPやページごとに設定するlayoutsを変えることもできます。</p>
      <a href="https://nuxtjs.org/docs/directory-structure/layouts/">参考ページ</a>
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
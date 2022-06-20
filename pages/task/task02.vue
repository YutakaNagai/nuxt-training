<template>
  <div>
    <div>
      <BreadCrumbList :breadCrumbList="breadCrumbList" />
    </div>
    <div>
      <h1>Task</h1>
      <h2>layoutsを変更してみよう！</h2>
    </div>
    <div>
      <p>nuxtにはlayoutsという機能があります。</p>
      <p>layouts配下には、各ページ共通で利用可能な設定することができます。</p>
      <ul>
        <li>
          課題その1 - layoutsの機能
          <p>layouts/default.vueを書き換えて、h1タグを使用してこのWEBサイトのタイトルを設定しましょう！</p>
          <p>画面遷移後も設定したタイトルが表示されていれば成功です。</p>
        </li>
        <li>
          課題その2 - エラー画面
          <p>このファイルではエラー画面もlayoutsに含まれています。</p>
          <p>layouts/error.vueを書き換えて、エラーメッセージを追加しましょう！</p>
          <p>メニューバーのWorkや、存在しないアドレスにアクセスした際に追加したエラーメッセージが表示されていれば成功です。</p>
        </li>
        <li>
          課題その3 - layoutの切替
          <p>layoutは、ページごとに切り替えることができます。</p>
          <p>layouts/default_blue.vueを作成して、Home画面専用のlayoutを設定してみましょう！</p>
          <p>内容はlayouts/default.vueを参考に、h1の背景色をskyblueしてください。</p>
          <p>Homeでは青背景、他画面では緑背景の状態でタイトルが表示できていれば成功です。</p>
        </li>
      </ul>
    </div>
    <div class="complete">
      <h3>完成イメージ</h3>
      <div class="image">
        <h4>課題その1</h4>
        <img src="~/static/task02_1.png" width="400"/>
      </div>
      <div class="image">
        <h4>課題その2</h4>
        <img src="~/static/task02_2.png" width="400"/>
      </div>
      <div class="image">
        <h4>課題その3</h4>
        <img src="~/static/task02_3.png" width="400"/>
      </div>
    </div>
    <div>
      <h2>課題の提出</h2>
      <h4>課題の提出は下記内容のPRを作成してください。</h4>
      <ul>
        <li>
          ブランチ名: 
          <p>fix_layouts</p>
        </li>
        <li>
          PRのタイトル名: 
          <p>課題02</p>
        </li>
        <li>
          PRの概要欄（自由記入）: 
          <p>難しかった点、実装したけど理解できていない点、参考にしたサイトなど</p>
        </li>
      </ul>
    </div>
    <div class="supplement">
      <h2>補足説明</h2>
      <p>layoutsにはさまざまなテンプレートを保管しておくことができます。</p>
      <p>PC/SPやページごとに設定するlayoutsを変えることもできます。</p>
      <a href="https://nuxtjs.org/docs/directory-structure/layouts/">参考ページ</a>
    </div>
  </div>
</template>
<script>
export default {
  // dataでreturnした変数はtemplate内で呼び出すことができるようになります。
  data() {
    // パンくずリストの初期化
    const breadCrumbList = []
    return {
      // createdで代入したパンくずリスト
      breadCrumbList,
    }
  },
  // createdに記載することで、DOMの作成前にデータを定義することができます。
  created() {
    // こちらで代入することで、dataで定義したbreadCrumbListを上書きする
    this.breadCrumbList = [
      {
        title: 'Home',
        url: '/',
      },
      {
        title: 'Task',
        url: '/task',
      },
      {
        title: 'Task02',
      },
    ]
  }
}
</script>
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
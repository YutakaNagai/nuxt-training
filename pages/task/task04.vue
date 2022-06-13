<template>
  <div>
    <div>
      <!-- パンくずリスト -->
      <!-- エラー落ちを防ぐため、事前にURLとタイトルの存在をチェック -->
      <span><a v-if="breadCrumbList[0].url && breadCrumbList[0].title" :href="breadCrumbList[0].url">{{ breadCrumbList[0].title }}</a> &gt; </span>
      <span><a v-if="breadCrumbList[1].url && breadCrumbList[1].title" :href="breadCrumbList[1].url">{{ breadCrumbList[1].title }}</a> &gt; </span>
      <span v-if="breadCrumbList[2].title">{{ breadCrumbList[2].title }}</span>
    </div>
    <div>
      <h1>Task</h1>
      <h2>部品をコンポーネント化しよう！</h2>
    </div>
    <div>
      <p>vueでは、さまざまな箇所で使用する部品をコンポーネント化することができます。</p>
      <p>コンポーネントの呼び出し部分は、<a href="task01">課題01</a>でも少し触れてみたと思います。</p>
      <p>今回は実際にパンくずリストコンポーネントを作成して、各画面に配置してみましょう。</p>
      <ul>
        <li>
          <h4>課題その1 - パンくずリストの作成</h4>
          <p>まずはこちらを見てください。</p>
          <div class="image">
            <img src="~/static/task04_1.png" width="400">
          </div>
          <p>ページタイトルの上部にHome画面からこの画面までの動線が追加されています。</p>
          <p>こちらはパンくずリストと呼ばれる、中規模程度以上のWEBページではよく使用される部品です。<br>パンくずリストについての詳細は、<a href="https://www.asobou.co.jp/blog/web/breadcrumb-list" target="_blank">こちらを確認（外部サイト）</a>してください。</p>
          <p>今回は上記のサイトに記載のある、位置型パンくずリストを作成してみましょう！</p>
          <p>下記は各画面と、設置したいパンくずリストの対応表です。<br>このページのソースコードを参考に、各画面でパンくずリストを作成してください。</p>
          <table border="solid">
            <thead>
              <tr>
                <td>画面名</td>
                <td>パンくずリストの形</td>
                <td>リンクを付ける箇所箇所</td>
                <td>階層</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Home</td>
                <td>パンくずリストなし</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Task</td>
                <td>Home > Task</td>
                <td>Home</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Contents</td>
                <td>Home > Contents</td>
                <td>Home</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Task〇〇（〇〇には01, 02などが入ります）</td>
                <td>Home > Task > Task〇〇</td>
                <td>Home, Task</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
        </li>
        <li>
          課題その2 - コンポーネント化
          <p>課題その1でパンくずリストの表示はできましたか？<br>次はそれをコンポーネント化してみましょう！</p>
          <p>components/BreadCrumbList.vueに処理をまとめ、BreadCrumbListとhierarchyを渡すだけで正しく動作するよう修正してください。</p>
          <p>v-forやv-elseを使って上手く仕上げてみてください。<br>多分普通にロジックで悩むと思うので、わからなければ相談してください。</p>
        </li>
      </ul>
    </div>
    <div class="complete">
      <h3>完成イメージ</h3>
      <div class="image">
        <img src="~/static/task04_1.png" width="400"/>
        <p>（他画面は省略）</p>
      </div>
    </div>
    <div>
      <h2>課題の提出</h2>
      <h4>課題の提出は下記内容のPRを作成してください。</h4>
      <ul>
        <li>
          ブランチ名: 
          <p>add_breadCrumbList</p>
        </li>
        <li>
          PRのタイトル名: 
          <p>課題04</p>
        </li>
        <li>
          PRの概要欄（自由記入）: 
          <p>難しかった点、実装したけど理解できていない点、参考にしたサイトなど</p>
        </li>
      </ul>
    </div>
    <div class="supplement">
      <h2>補足説明</h2>
      <p>基本的に後々使いそうな部品はコンポーネントにしておくと便利です。<br>部品の共通化は、コードのミニマル化→メンテナンスしやすさにつながります。</p>
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
      // 階層（このページは上位にHome, Taskがあるため、3を設定）
      hierarchy: 3,
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
        title: 'Task04',
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
h4 {
  background-color: seashell;
}
thead {
  background-color: gainsboro;
}
</style>
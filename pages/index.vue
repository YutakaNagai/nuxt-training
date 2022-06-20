<template>
  <div>
    <div>
      <BreadCrumbList :breadCrumbList="breadCrumbList" />
    </div>
    <h1>Home</h1>
    <div>
      <h2>概要</h2>
      <p>このページは、事前研修用のページです。</p>
      <p>画面上部のメニューバーからTaskを押下すると、課題のページに飛ぶことができます。</p>
      <p>githubを使って課題をこなしていきましょう！</p>
      <hr>
      <h2>はじめに</h2>
      <p>課題の前にまずは、下記のコマンドでリモートリポジトリ（ネットワーク上のファイル）をローカルにクローンします。</p>
      <code>git clone https://github.com/YutakaNagai/nuxt-training.git</code>
      <p>クローンに成功したら、対象ディレクトリで、<code>npm ci</code>を行います。</p>
      <p>※<code>npm ci</code>を行うことでpackage-lock.json（パッケージの固定化ファイル）の内容に合わせ、node_modules（実際に動くパッケージ）が更新されます。その際パッケージに脆弱性があると下記の画像のように警告が走りますが、一旦は問題ありません。</p>
      <img src="vuln.png" width="400">
      <p><code>npm ci</code>に成功したら、<code>npm run dev</code>を実行することでローカルでの起動ができます。</p>
      <p>ターミナルに下記が表示されたらローカル起動が成功しています。</p>
      <p>http://localhost:3000/にアクセスして、動作確認をしましょう。</p>
      <img src="dev_success.png" width="400">
    </div>
  </div>
</template>
<script>
export default {
  layout () {
    return 'default_blue'
  },
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
        url: '/'
      }
    ]
  }
}
</script>
<style scoped>
h1 {
  background-color:palegreen;
}
h2 {
  background-color: antiquewhite;
}
code {
  display: inline-block;
  padding: 0.1em 0.2em;
  background-color: #e7edf3;
  border-radius: 3px;
}
</style>
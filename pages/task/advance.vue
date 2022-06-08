<template>
  <div>
    <h1>Task</h1>
    <div>
      <h2>課題の前に</h2>
      <h3>注意事項</h3>
      <ol>
        <li>各課題は、PR（プルリクエスト）を作成して提出してください。</li>
        <li>各課題ページにはブランチ名、PR名などの指定があります。修正前に必ず確認し、指示に沿ったPRを作成してください。</li>
        <li>PRの向き先はmasterブランチにしてください。</li>
        <li>指示がない限りマージを行わないでください。</li>
      </ol>
      <hr>
      <h2>課題の流れ</h2>
      <p>課題を行うときは、下記の流れで行なってください。</p>
      <ol>
        <li>課題ページで修正内容を確認し、実装イメージを固める</li>
        <li>
          <code>git checkout</code>コマンドで修正ブランチに移動
          <p>※<code>-b</code>オプションを使うと、新しい派生ブランチを作成することができます。</p>
          <p>実行例</p>
          <code>git checkout -b (new_branch) origin/master</code>
        </li>
        <li>課題内容に沿って修正を実施</li>
        <li>
          修正内容を確認し、エディタの機能もしくは<code>git add</code>コマンドで変更をステージ
        </li>
        <li>
          <code>git commit</code>コマンドでステージされた変更をコミット
          <p>※基本的には<code>-m</code>オプションを使用し、わかりやすいコミットメッセージをつけてください。</p>
          <p>実行例</p>
          <code>git commit -m "〇〇を××に変更"</code>
        </li>
        <li>
          <code>git push</code>コマンドでリモートのブランチにpush
          <p>※新規作成したブランチでも、このコマンドを実行することでリモートにブランチが作成されます。</p>
          <p>実行例</p>
          <code>git push origin (new_branch)</code>
        </li>
        <li>
          pushしたブランチをmasterに向けて、PRを作成
        </li>
        <li>
          PR作成後、Slackで連絡
          <p>修正がある場合、3に戻る</p>
        </li>
      </ol>
      レビューは業務時間外に実施するので、課題は進められるだけ進めてください。
    </div>
  </div>
</template>
<script>
export default {
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
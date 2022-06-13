<template>
  <div>
    <div>
      <h1>Task</h1>
      <h2>Mixinを使ってみよう！</h2>
    </div>
    <div>
      <p>課題に取り掛かる前に、まずは<a href="/contents/calculator">こちらのページを</a>みてみましょう。</p>
      <p>vueの機能であるmethodsとcomputedを使って、簡単な数値計算ページを作成してみました。</p>
      <p>実装(ソースコード)を読んでみると、ページvue（pages/contents/calculator.vue）からコンポーネントを呼び出し、各コンポーネントで計算を行なっているようですが、何か違和感に気づきませんか？</p>
      <p>そう、CalcAddなどのコンポーネント内では直接の計算処理をしていないのです！<br>これらの処理は各コンポーネントから呼び出されるmixins/CalculateMixin.jsの中で行われています。</p>
      <p>このように他のファイルから呼び出して使用することができるのが、Mixinの機能となります。<br>ざっくりではありますが、呼び出し元のvueファイルのscript部分に繋がっていると考えていただければ概ね問題ありません。（ページvueからコンポーネントを呼び出す処理についても同様です。）</p>
      <p>前回の課題でもさらっと触れましたが、部品の共通化をする上で、コンポーネントやMixinの考え方はとても重要なので、覚えておきましょう。</p>
      <ul>
        <li>
          <h4>課題その1 - コードをトレースしてみよう</h4>
          <p>説明を読んだだけではわかりにくいと思うので、まずはコードのトレースを行いましょう。<br>下記の順番で読み解くのがおすすめです。</p>
          <p>pages/contents/calculator.vue → components/Calc〇〇.vue → mixins/CalculateMixin.js</p>
          <p>特に、コンポーネント - Mixin間で特にpropsでの値受け渡しなどしていない点や、methods, computedの呼び出しは注目してみてください。<br>上述したように親コンポーネントのscript部分に繋がっていると考えるとわかりやすいと思います。</p>
        </li>
        <li>
          課題その2 - Mixinを実際に使ってみよう
          <p>それでは、実際にMixinを使用して、剰余算の下に文字列結合を追加してみましょう。</p>
          <p>computedとmethodsどちらも使って、他の演算箇所と同じように追加してください。</p>
          <p>ファイル名はCalcConcat.vueでお願いします。</p>
        </li>
      </ul>
    </div>
    <div class="complete">
      <h3>完成イメージ</h3>
      <div class="image">
        <p>（省略）</p>
      </div>
    </div>
    <div>
      <h2>課題の提出</h2>
      <h4>課題の提出は下記内容のPRを作成してください。</h4>
      <ul>
        <li>
          ブランチ名: 
          <p>add_calcConcat</p>
        </li>
        <li>
          PRのタイトル名: 
          <p>課題05</p>
        </li>
        <li>
          PRの概要欄（自由記入）: 
          <p>難しかった点、実装したけど理解できていない点、参考にしたサイトなど</p>
        </li>
      </ul>
    </div>
    <div class="supplement">
      <h2>補足説明</h2>
      <p>実際の現場ではPC/SPでページvueファイルが分かれているので、そこでMixinを使うことが多いです。<br>※hoge.pc.vueとhoge.sp.vueから共通のMixinを読み出す感じです。</p>
      <p>また、他にもトラッキングパラメータやmeta情報の設定など、ほぼ全画面に影響するものについてもMixinにまとめることがあります。</p>
    </div>
  </div>
</template>
<script>
export default {
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
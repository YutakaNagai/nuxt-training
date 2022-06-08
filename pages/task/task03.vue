<template>
  <div>
    <div>
      <h1>Task</h1>
      <h2>繰り返しと条件分岐を試してみよう！</h2>
    </div>
    <div>
      <p>vueには、v-ifやv-forといったtemplate内で使うことのできる分岐、ループがあります。</p>
      <p>複雑でない処理の場合、この書き方を使うことが多いです。</p>
      <ul>
        <li>
          課題その1 - 繰り返し
          <p>v-forを使って、pages/task/index.vueの課題リストを動的に繰り返し表示しましょう！</p>
          <p>ulタグ、liタグ、aタグを１回ずつ使用して、繰り返し表示ができれば成功です。</p>
          <p>v-forの設定には一意のkeyを設定する必要があるので注意しましょう。</p>
        </li>
        <li>
          課題その2 - 条件分岐
          <p>v-ifを使って、pages/task/index.vueの課題リストにcssを動的に当ててみましょう！</p>
          <p>課題その1で動的に繰り返し表示が行われている状態で、奇数番目にはodd、偶数番目にはevenを当てることができれば成功です。</p>
          <p>可能であれば、v-ifを使わず三項演算子を使用するとスマートに実装できます。</p>
        </li>
      </ul>
    </div>
    <div class="complete">
      <h3>完成イメージ</h3>
      <div class="image">
        <img src="~/static/task03.png" width="400"/>
      </div>
    </div>
    <div>
      <h2>課題の提出</h2>
      <h4>課題の提出は下記内容のPRを作成してください。</h4>
      <ul>
        <li>
          ブランチ名: 
          <p>fix_loop</p>
        </li>
        <li>
          PRのタイトル名: 
          <p>課題03</p>
        </li>
        <li>
          PRの概要欄（自由記入）: 
          <p>難しかった点、実装したけど理解できていない点、参考にしたサイトなど</p>
        </li>
      </ul>
    </div>
    <div class="supplement">
      <h2>補足説明</h2>
      <p>v-if内の条件式には、通常のif文で使うものと同じ条件を設定することができますが、コードの見通しや処理速度を考え、複雑な処理や重たい処理はmethodsなどに切り出すことが多いです。</p>
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
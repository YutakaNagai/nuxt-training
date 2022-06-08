<!-- propsで親コンポーネントから受け取った値は様々なところで使えます。 -->
<template>
  <!-- @clickには、押下時のイベントを設定することができます。下記ではmethodsのonClickLInkが呼び出されます。 -->
  <div class="btn btn-gradient wrap" @click="onClickLink" >
    <!-- タグ内でのコロンは特別な意味を持ちます。v-bindの省略形として、関数の戻り値や変数の中身を呼び出すことができます。 -->
    <img :src="icon" width="25" height="30" />
    <!-- {{}} ←こちらはマスタッシュと呼ばれ、変数や関数の戻り値を直接表示することができます。 -->
    <p>{{ buttonName }}</p>
  </div>
</template>
<script>

export default {
  // propsには親コンポーネントから受け取った値が保管されます。
  props: {
    // こちらは、hrefという名前のString型、初期値が空文字のpropsです。
    href: {
      type: String,
      default: '',
    },
    // required:trueを設定すると、必須パラメータとなります。
    buttonName: {
      type: String,
      default: '',
      required: true,
    },
    // defaultに初期値を設定すると、親から受け取れなかった際に該当propsに格納されます。
    // components/NavigationBar.vueのL31をコメントアウトして確認してみましょう。
    icon: {
      type: String,
      default: 'file.png',
    },
    // 型にはBooleanやNumberなども設定することができます。Boolean型は切替フラグなどによく使われます。
    newTab: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    onClickLink () {
      if (this.newTab) {
        // 親コンポーネントから渡されたnewTabがtrueの場合、別タブで親コンポーネントから渡されたhrefのページを開く
        window.open(this.href, '_blank')
      } else {
        // 親コンポーネントから渡されたnewTabがfalseの場合、同じタブで親コンポーネントから渡されたhrefのページを開く
        window.location.href = this.href
      }
    },
  }
}
</script>

<style scoped>
div.btn-gradient {
  -webkit-transform: skew(-15deg);
  transform: skew(-15deg);
  color: #fff;
  border-radius: 0;
  background-image: -webkit-gradient(linear, left top, right top, from(#2af598), to(#009efd));
  background-image: -webkit-linear-gradient(left, #2af598 0%, #009efd 100%);
  background-image: linear-gradient(90deg, #2af598 0%, #009efd 100%);
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
  box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
  width: 100px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 20px;
  float: left;
  margin-left: 20px;
}

div.btn-gradient:hover {
  cursor: pointer;
  -webkit-transform: skew(0);
  transform: skew(0);
  color: #fff;
  -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, .1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, .1);
}

div.wrap{
  display: flex;
}
</style>
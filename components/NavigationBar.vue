<template>
  <div>
    <!-- こちらでNavigationButtonに各プロパティを渡し、コンポーネント呼び出しを行なっています。 -->
    <navigation-button :href="home.url" :button-name="home.name" :icon="home.icon" :new-tab="home.newTab" />
    <navigation-button :href="github.url" :button-name="github.name" :icon="github.icon" :new-tab="github.newTab" />
    <navigation-button :href="work.url" :button-name="work.name" :icon="work.icon" :new-tab="work.newTab" />
  </div>
</template>
<script>
import NavigationButton from "~/components/NavigationButton.vue"

export default {
  components:{
    NavigationButton,
  },
  // dataのreturnに記載することで、template内で値を使用することができます。
  data() {
    return {
      // jsでは下記のような連想配列（オブジェクト）がよく使用されます。
      // home.urlやgithub.iconなどと記載することで、変数の値を呼び出すことができます。
      home: {
        url: '/',
        name: 'Home',
        icon: 'pencil.png',
        newTab: false,
      },
      github: {
        url: 'https://github.com/YutakaNagai/sample_app',
        name: 'GitHub',
        icon: 'internet.png',
        newTab: true,
      },
      work: {
        url: 'work',
        name: 'Work',
        icon: 'work.png',
        newTab: false,
      },
    }
  }
}
</script>
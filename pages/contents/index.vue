<template>
  <div>
    <div>
      <BreadCrumbList :breadCrumbList="breadCrumbList" />
    </div>
    <h1>Contents</h1>
    <div>
      <p>各種コンテンツのページです。</p>
    </div>
    <div>
      <ul v-for="content in contents" :key="`content-${content.name}`">
        <li>
          <a :href="`contents/${content.contentName}`">{{ content.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    // パンくずリストの初期化
    const breadCrumbList = []
    return {
      contents: [
        {
          contentName: 'calculator',
          title: 'けいさん'
        }
      ],
      // createdで代入したパンくずリスト
      breadCrumbList
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
        title: 'Contents',
        url: '/contents',
      }
    ]
  }
}
</script>
<style scoped>
h1 {
  background-color:palegreen;
}
</style>
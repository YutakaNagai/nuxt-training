<template>
  <div>
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
    return {
      contents: [
        {
          contentName: 'hoge',
          title: 'hoge'
        }
      ],
    }
  }
}
</script>
<style scoped>
h1 {
  background-color:palegreen;
}
</style>
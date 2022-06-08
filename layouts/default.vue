<template>
  <div>
    <div>
      <navigation-bar />
    </div>
    <div class="content">
      <hr class="fade">
      <nuxt />
    </div>
  </div>
</template>
<script>
import NavigationBar from '~/components/NavigationBar.vue';
export default {
  components:{
    NavigationBar,
  }
}
</script>
<style scoped>
div.content {
  clear: left;
}
.fade {
  height: 1px;
  background-image: linear-gradient(
    90deg,
    hsla(0, 0%, 100%, 0),
    hsla(0, 0%, 100%, 0.5) 50%,
    hsla(0, 0%, 100%, 0) 100%);
}
</style>
<template>
  <div>
    <div v-if="breadCrumbList.length > 1">
    <span v-for="(breadCrumb, index) in breadCrumbList" :key="index">
    <span v-if="index < breadCrumbList.length - 1">
    <a :href="breadCrumb.url">{{ breadCrumb.title }}</a> &gt;
    </span>
    <span v-else>{{ breadCrumb.title }}</span>  
    </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    breadCrumbList: { type: Array , default: () => [] }
  }
}
</script>

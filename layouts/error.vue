<template>
  <div>
    <h1>＜エラー＞このページは存在しません</h1>
    <p>ステータスコード：{{ error.statusCode }}</p>
    <p>メッセージ：{{ error.message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>
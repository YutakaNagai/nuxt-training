<template>
  <div>
    <h3>
      減算
    </h3>
    <p>computed</p>
    <input v-model.number="sub1" type="number"> - <input v-model.number="sub2" type="number"> = {{ subCp }} <br>
    <p>methods</p>
    <input v-model.number="sub3" type="number"> - <input v-model.number="sub4" type="number"> = {{ calc('sub', sub3, sub4) }} <br>
  </div>
</template>
<script>
import CalculateMixin from "~/mixins/CalculateMixin.js"

export default {
  mixins:[CalculateMixin]
}
</script>

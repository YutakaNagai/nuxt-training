<template>
  <div>
    <h3>
      乗算
    </h3>
    <p>computed</p>
    <input v-model.number="mul1" type="number"> * <input v-model.number="mul2" type="number"> = {{ mulCp }} <br>
    <p>methods</p>
    <input v-model.number="mul3" type="number"> * <input v-model.number="mul4" type="number"> = {{ calc('mul', mul3, mul4) }} <br>
  </div>
</template>
<script>
import CalculateMixin from "~/mixins/CalculateMixin.js"

export default {
  mixins:[CalculateMixin]
}
</script>
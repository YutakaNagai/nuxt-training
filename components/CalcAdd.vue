<template>
  <div>
    <h3>
      加算
    </h3>
    <p>computed</p>
    <input v-model.number="add1" type="number"> + <input v-model.number="add2" type="number"> = {{ addCp }} <br>
    <p>methods</p>
    <input v-model.number="add3" type="number"> + <input v-model.number="add4" type="number"> = {{ calc('add', add3, add4) }} <br>
  </div>
</template>
<script>
import CalculateMixin from "~/mixins/CalculateMixin.js"

export default {
  mixins:[CalculateMixin]
}
</script>


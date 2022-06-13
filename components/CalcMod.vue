<template>
  <div>
    <h3>
      剰余算
    </h3>
    <p>computed</p>
    <input v-model.number="mod1" type="number"> % <input v-model.number="mod2" type="number"> = {{ modCp }} <br>
    <p>methods</p>
    <input v-model.number="mod3" type="number"> % <input v-model.number="mod4" type="number"> = {{ calc('mod', mod3, mod4) }} <br>
  </div>
</template>
<script>
import CalculateMixin from "~/mixins/CalculateMixin.js"

export default {
  mixins:[CalculateMixin]
}
</script>
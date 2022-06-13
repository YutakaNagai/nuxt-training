<template>
  <div>
    <h3>
      除算
    </h3>
    <p>computed</p>
    <input v-model.number="div1" type="number"> / <input v-model.number="div2" type="number"> = {{ divCp }} <br>
    <p>methods</p>
    <input v-model.number="div3" type="number"> / <input v-model.number="div4" type="number"> = {{ calc('div', div3, div4) }} <br>
  </div>
</template>
<script>
import CalculateMixin from "~/mixins/CalculateMixin.js"

export default {
  mixins:[CalculateMixin]
}
</script>
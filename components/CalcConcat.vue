<template>
  <div>
    <h3>
      文字列結合
    </h3>
    <p>computed</p>
    <input v-model="str1" type="text"> + <input v-model="str2" type="text"> = {{ conCP }} <br>
    <p>methods</p>
    <input v-model="str3" type="text"> + <input v-model="str4" type="text"> = {{ calc('con', str3, str4) }} <br>
  </div>
</template>
<script>
import CalculateMixin from "~/mixins/CalculateMixin.js"

export default {
  mixins:[CalculateMixin]
}
</script>


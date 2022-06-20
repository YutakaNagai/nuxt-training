<template>
  <div>
    <h1>Contents</h1>
    <h2>けいさん</h2>
    <div>
      <calc-add />
      <calc-sub />
      <calc-mul />
      <calc-div />
      <calc-mod />
      <calc-concat />
    </div>
  </div>
</template>
<script>
import CalcAdd from "~/components/CalcAdd.vue"
import CalcSub from "~/components/CalcSub.vue"
import CalcMul from "~/components/CalcMul.vue"
import CalcDiv from "~/components/CalcDiv.vue"
import CalcMod from "~/components/CalcMod.vue"
import CalcConcat from "~/components/CalcConcat.vue"

export default {
  components:{
    CalcAdd,
    CalcSub,
    CalcMul,
    CalcDiv,
    CalcMod,
    CalcConcat
  },
}
</script>
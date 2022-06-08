<template>
  <div>
    <h1>Task</h1>
    <div>
      <h2>課題リストです。</h2>
      <h3>課題の実施前には必ず<a href="task/advance" target="_brank" width="600">こちらのページ</a>を確認してください。</h3>
    </div>
    <div>
      <!-- 課題リスト -->
      <ul>
        <li class="odd">
          <a :href="`task/task${tasks[0].articleNum}`">{{ tasks[0].title }}</a>
        </li>
        <li class="even">
          <a :href="`task/task${tasks[1].articleNum}`">{{ tasks[1].title }}</a>
        </li>
        <li class="odd">
          <a :href="`task/task${tasks[2].articleNum}`">{{ tasks[2].title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tasks: [
        {
          articleNum: '01',
          title: 'トップメニューにContentsを表示させてみよう！'
        },
        {
          articleNum: '02',
          title: 'layoutsを変更してみよう！'
        },
        {
          articleNum: '03',
          title: '繰り返しと条件分岐を試してみよう！'
        },
      ],
    }
  },
  methods: {
  },
}
</script>
<style scoped>
h1 {
  background-color:palegreen;
}
h2 {
  background-color: antiquewhite;
}
/* 奇数クラス */
.odd {
  background-color: white;
}
/* 偶数クラス */
.even {
  background-color: gainsboro;
}
</style>
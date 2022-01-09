<template>
  <div class="introWeek2 w-full p-2">
    <h1>I'm introWeek2</h1>
    <div class="divider"></div>

    <!-- <div class="mockup-code">
      <pre data-prefix="0">
        <code>npm i daisyui</code>
      </pre>
    </div> -->
    <AlertBell
      v-for="(intro, idx) in IntroList"
      :key="idx"
      :title="intro.title"
      :context="intro.context"
      :check="intro.check"
    />
  </div>
</template>

<script>
import { fetchUBike } from "@/utils/ubike/api.js";
import AlertBell from "@/components/AlertBell.vue";

const IntroList = [
  {
    title: "router簡介",
    context: "將會介紹router 包含用法 如何將頁面分類",
    check: true,
  },
  {
    title: "實作",
    context: "在進入頁面前呼叫的兩種做法",
    check: false,
  },
  {
    title: "vuex簡介",
    context: "將會介紹vuex( state , mutations , action )",
    check: false,
  },
  {
    title: "vuex簡介",
    context: "如何在SFC中呼叫vuex",
    check: false,
  },
  {
    title: "mixin簡介",
    context: "ubike更新頻率為每分鐘一次 如何時間到就互叫呢？",
    check: false,
  },
  {
    title: "promise 與 setTimeout",
    context: "ubike更新頻率為每分鐘一次 如何時間到就互叫呢？",
    check: false,
  },
  {
    title: "promise 語法糖 async await",
    context: "吃甜甜 好過年",
    check: false,
  },
  {
    title: "陣列操作與更新",
    context: "",
    check: false,
  },
];

export default {
  components: { AlertBell },
  data() {
    return {
      IntroList: IntroList,
      uBikeList: [],
    };
  },
  async created() {
    await this.fetchUBike();
  },
  methods: {
    async fetchUBike() {
      this.uBikeList = await fetchUBike();
      console.log(this.uBikeList);
    },
  },
  computed: {},
  watch: {},
};
</script>
<style lang="scss" scoped>
</style>
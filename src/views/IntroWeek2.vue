<template>
  <div class="introWeek2 w-full p-2 pt-64">
    <h1>I'm introWeek2</h1>
    <div class="divider"></div>

    <!-- <div class="mockup-code">
      <pre data-prefix="0">
        <code>npm i daisyui</code>
      </pre>
    </div> -->
    <div v-for="(intro, idx) in IntroList" :key="idx">
      <AlertBell
        :title="intro.title"
        :context="intro.context"
        :check="intro.check"
      />
      <RouterIntro v-if="intro.idx === 0" />
    </div>
  </div>
</template>

<script>
import { fetchUBike } from "@/utils/ubike/api.js";
import AlertBell from "@/components/AlertBell.vue";
import RouterIntro from "@/components/intro/week2/RouterIntro.vue";

const IntroList = [
  {
    idx: 0,
    title: "router簡介",
    context: "將會介紹router 包含用法 如何將頁面分類",
    check: true,
  },
  {
    idx: 1,
    title: "實作",
    context: "在進入頁面前呼叫的兩種做法",
    check: false,
  },
  {
    idx: 2,
    title: "vuex簡介",
    context: "將會介紹vuex( state , mutations , action )",
    check: false,
  },
  {
    idx: 3,
    title: "vuex簡介",
    context: "如何在SFC中呼叫vuex",
    check: false,
  },
  {
    idx: 4,
    title: "mixin簡介",
    context: "ubike更新頻率為每分鐘一次 如何時間到就互叫呢？",
    check: false,
  },
  {
    idx: 5,
    title: "promise 與 setTimeout",
    context: "ubike更新頻率為每分鐘一次 如何時間到就互叫呢？",
    check: false,
  },
  {
    idx: 6,
    title: "promise 語法糖 async await",
    context: "吃甜甜 好過年",
    check: false,
  },
  {
    idx: 7,
    title: "陣列操作與更新",
    context: "",
    check: false,
  },
];

export default {
  components: { AlertBell, RouterIntro },
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
  BeforeRouteEnter(to, from, next) {
    console.log("BeforeRouteEnter");
    console.log(to);
    console.log(from);
    // 這邊沒有this
    next((vm) => {
      //可透過vm呼叫元件實體
      console.log(vm.IntroList);
    });
  },
};
</script>
<style lang="scss" scoped>
</style>
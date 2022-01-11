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
      <div v-if="intro.idx === 3">
        <div class="grid grid-cols-4 gap-4">
          <div class="btn" @click="pageIndex--">上一頁</div>
          <div>第{{ pageIndex }}頁</div>
          <div class="btn" @click="pageIndex++">下一頁</div>
        </div>
        <!-- <div v-for="(u, idx) in uBikeList" :key="idx">ubike : {{ u.sna }}</div> -->
        <div v-for="(u, idx) in uBikePagination" :key="idx">
          {{ idx }} : {{ u.sna }}
          <div class="btn" @click="setMyFavoriteStation('add', u, idx)">
            add
          </div>
        </div>
      </div>
      <div v-if="intro.idx === 5">
        <!-- 如果以index當key 會造成移除錯誤的ubike -->
        <div
          v-for="(u, idx) in myFavoriteStation"
          :key="idx"
          :class="{ 'bg-yellow-200': u.superLike }"
        >
          {{ idx }} : {{ u.sna }}
          <div class="btn" @click="setMyFavoriteStation('pop', u, idx)">
            pop
          </div>
          <div class="btn" @click="setMyFavoriteStation('splice', u, idx)">
            splice
          </div>
          <div class="btn" @click="setMyFavoriteStation('super', u, idx)">
            super
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { fetchUBike } from "@/utils/ubike/api.js";
import AlertBell from "@/components/AlertBell.vue";
import RouterIntro from "@/components/intro/week2/RouterIntro.vue";
// import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
// eslint-disable-next-line no-unused-vars
import { mapState, mapActions, mapGetters } from "vuex";

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
    title: "promise 與 setTimeout",
    context: "ubike更新頻率為每分鐘一次 如何時間到就呼叫呢？",
    check: false,
  },
  {
    idx: 5,
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
      pageIndex: 1,
      pageSize: 10,
      myFavoriteStation: [],
    };
  },
  async created() {
    await this.fetchUBike();
    // await this.getUBikePagination(10, this.pageIndex);
  },
  methods: {
    ...mapActions(["fetchUBikeList"]),
    async fetchUBike() {
      await this.fetchUBikeList();
    },
    getUBikePagination() {
      this.uBikeList = this.doUBikePagination(this.pageSize, this.pageIndex);
    },
    setMyFavoriteStation(type, ubike, idx) {
      if (type === "add") {
        ubike.superLike = false;
        if (!this.myFavoriteStation.find((u) => u.sno === ubike.sno)) {
          this.myFavoriteStation.push(ubike);
        }else{
          alert('不可重複加入')
        }
      } else if (type === "pop") {
        this.myFavoriteStation.pop(ubike);
      } else if (type === "splice") {
        this.myFavoriteStation.splice(idx, 1);
      } else if (type === "super") {
        ubike.superLike = !ubike.superLike;
        this.myFavoriteStation.splice(idx, 1, ubike);
      }
    },
  },
  computed: {
    // ...mapState(["uBikeList"]),
    ...mapGetters(["getUBikeList", "doUBikePagination"]),
    uBikePagination() {
      return this.doUBikePagination(this.pageSize, this.pageIndex);
    },
  },
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
<style lang="scss" scoped></style>

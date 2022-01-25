<template>
  <div class="overflow-y-auto">
    <div
      class="m-2 rounded-full border-2"
      @click="$router.push({ name: 'UBikeIntro' })"
    >
      點我看ubike week3 實作說明
    </div>
    <UbikeIntro />

    <div class="divider">我的最愛</div>
    <MyFavorite :myFavoriteList.sync="myFavoriteList" />

    <div class="divider">一覽表</div>
    <Overview
      :ubikeList="uBikePagination"
      :myFavoriteList.sync="myFavoriteList"
    />
    <BtnArea :pageIndex.sync="pageIndex" />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapState, mapActions, mapGetters } from "vuex";
// import UpdateUBikeListMixin from "@/components/UpdateUBikeListMixin.js";
import UbikeIntro from "@/components/ubike/UbikeIntro.vue";
import Overview from "@/components/ubike/Overview.vue";
import MyFavorite from "@/components/ubike/MyFavorite.vue";
import BtnArea from "@/components/ubike/BtnArea.vue";
export default {
  // mixins: [UpdateUBikeListMixin],
  data() {
    return {
      uBikeList: [],
      pageIndex: 1,
      pageSize: 20,
      myFavoriteStation: [],
      timeoutID: "",
      myFavoriteList: [],
    };
  },
  components: { UbikeIntro, Overview, MyFavorite, BtnArea },
  async created() {
    console.log("UBIKE created");

    await this.fetchUBike();
    // await this.getUBikePagination(10, this.pageIndex);
    // 新增刷新
    // this.timeoutID = window.setInterval(
    //   async () => await this.fetchUBike(),
    //   1000 * 3
    // );
  },
  methods: {
    ...mapActions(["fetchUBikeList"]),
    async fetchUBike() {
      console.log("excute fetchUBike");
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
        } else {
          alert("不可重複加入");
        }
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
      console.log("uBikePagination = ", this.pageIndex);
      return this.doUBikePagination(this.pageSize, this.pageIndex);
    },
  },
  beforeDestroy() {
    // window.clearInterval(this.timeoutID);
  },
  watch: {
    pageIndex(newVal) {
      console.log(newVal);
    },
    myFavoriteList(newVal) {
      console.log(newVal);
    },
  },
};
</script>

<style>
</style>
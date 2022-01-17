<template>
  <div class="overflow-x-auto">
    <p class="indent-8 border-2 border-black m-4 p-4 pl-6 text-left">
          ubike實作時間
      <ol class="list-decimal">
        <li>
          呼叫ubike列表電文 (時間點隨意) 並顯示在畫面上
        </li>
        <li>
          做出分頁功能 可選擇在頁面實現 或在 vuex實現
        </li>
        <li>
          ubike更新頻率為每分鐘一次 如何時間到就呼叫更新呢？ 請記得離開頁面時要取消 可抽成mixin
        </li>
        <li>
          我的最愛功能 的新增與刪除
        </li>
        <li>
          刷新後我的最愛的車輛數量也要跟著更新
        </li>
      </ol>
    </p>
    <div class="divider"> 我的最愛</div>
    <table class="table w-full">
      <thead>
        <tr>
          <th></th>
          <th>站點名</th>
          <th>剩餘數/總數</th> 
          <th></th> 

        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>大安站</td>
          <td>11/20</td>
          <th>移除</th> 
        </tr>
      </tbody>
    </table>
    
    <div class="divider">一覽表</div>
    <table class="table w-full">
      <thead>
        <tr>
          <th></th>
          <th>站點名</th>
          <th>剩餘數/總數</th> 
          <th></th> 
        </tr>
      </thead>
      <tbody>
        <tr v-for="ubike in uBikePagination" :key="ubike.sno">
          <th>{{ubike.sno}}</th>
          <td>{{ubike.sna}}</td>
          <td>{{ubike.sbi}}/{{ubike.tot}}</td>
          <th>加入最愛</th> 
        </tr>
      </tbody>
    </table>
    <div class="flex justify-center">
      <div class="btn" @click="pageIndex--">上一頁</div>
      <div>第{{ pageIndex }}頁</div>
      <div class="btn" @click="pageIndex++">下一頁</div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapState, mapActions, mapGetters } from "vuex";
import UpdateUBikeListMixin from "@/components/UpdateUBikeListMixin.js";
export default {
  mixins: [UpdateUBikeListMixin],
  data() {
    return {
      uBikeList: [],
      pageIndex: 1,
      pageSize: 20,
      myFavoriteStation: [],
      timeoutID: "",
    };
  },
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
      return this.doUBikePagination(this.pageSize, this.pageIndex);
    },
  },
  beforeDestroy() {
    // window.clearInterval(this.timeoutID);
  },
};
</script>

<style>
</style>
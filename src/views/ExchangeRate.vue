<template>
  <div class="exchangeRate">
    <h1>This is the exchangeRate page</h1>
    <p>1 歐元 = 31.518378台幣</p>
    <ol>
      <li>簡單的台幣歐元換算 輸入框 點擊換算後 計算 (methods)</li>
      <li>
        利用mock api 做出 歐元 兌換其他幣別的 下拉選單,切換後 須歸0 (watch)
      </li>
      <li>
        利用computed get set 做出 歐元 兌換其他幣別的 互相換算功能,點擊輸入框時
        須歸0(computed)
      </li>
    </ol>
    <!-- write here... -->
  </div>
</template>

<script>
import { fetchExchangeRate } from "@/utils/api.js";
export default {
  data() {
    return {
      rateData: {},
    };
  },
  created() {},
  mounted() {},
  methods: {
    async getExchangeRateData() {
      // 因為免費方案 基礎是歐元
      this.rateData = await fetchExchangeRate();
    },
  },
  computed: {},
};
</script>
// <style lang="scss" scoped>
// ol {
//   // width: 300px;
//   li {
//     display: flex;
//     justify-content: left;
//     // width: 300px;
//   }
// }
//
</style>
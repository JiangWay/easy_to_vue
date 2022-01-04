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
    <hr />
    <!-- write here... -->
    <ol>
      <li>
        <div class="question">
          簡單的台幣歐元換算 輸入框 點擊換算後 計算 (methods)
        </div>
        <div class="answer">
          <input v-model="twd" @click="toZeroQ1()" /><button @click="getEur()">
            換算成歐元
          </button>
          -->
          {{ eur }}
        </div>
        <hr />
      </li>
      <li>
        <div class="question">
          利用mock api 做出 歐元 兌換其他幣別的 下拉選單,切換後 須歸0 (watch)
        </div>
        <div class="answer">
          <select v-model="currentCurrency">
            <!-- <option
              v-for="[currency] in Object.entries(rateData)"
              :key="currency"
              :selected="currentCurrency === 'TWD'"
            > -->
            <option
              v-for="(value, key) in rateData"
              :key="key"
              :selected="currentCurrency === 'TWD'"
            >
              {{ key }}
            </option>
          </select>
          <div>
            {{ currentCurrency }}
            <input v-model="currencyA" @click="toZeroQ2()" />
            換算為歐元(EUR)
            <input v-model="currencyB" @click="toZeroQ2()" />
          </div>
        </div>
        <hr />
      </li>
      <li>
        <div class="question">
          利用computed get set 做出 歐元 兌換其他幣別的
          互相換算功能,點擊輸入框時 須歸0(computed)
        </div>
        <div class="answer">
          <div>
            {{ currentCurrency }}
            <input v-model="currencyAA" @click="toZeroQ3()" />
            換算為歐元(EUR)
            <input v-model="currencyBB" @click="toZeroQ3()" />
          </div>
        </div>
        <hr />
      </li>
    </ol>
  </div>
</template>

<script>
import { fetchExchangeRate } from "@/utils/api.js";
export default {
  data() {
    return {
      rateData: {},
      // question 1
      rate: 31.518378,
      twd: 0,
      eur: 0,
      // question 2
      currentCurrency: "TWD",
      currencyA: "",
      currencyB: "",
      // question 3
      currencyAA: "",
      // currencyBB: "",
    };
  },
  async created() {
    await this.getExchangeRateData();
  },
  mounted() {},
  methods: {
    async getExchangeRateData() {
      // 因為免費方案 基礎是歐元
      this.rateData = await fetchExchangeRate();
      console.log(this.rateData);
    },
    // question 1
    getEur() {
      this.eur = this.twd * this.rate;
    },
    toZeroQ1() {
      this.twd = "";
      this.eur = "";
    },
    // question 2
    toZeroQ2() {
      this.currencyA = "";
      this.currencyB = "";
    },
    // question 3
    toZeroQ3() {
      this.currencyAA = "";
      // this.currencyBB = "";
    },
  },
  computed: {
    // question 3
    currencyBB: {
      get() {
        let rate = this.rateData[this.currentCurrency];
        // let rate = this.rateData.get(this.currentCurrency);
        return this.currencyAA / rate;
      },
      set(val) {
        let rate = this.rateData[this.currentCurrency];
        this.currencyAA = val * rate;
      },
    },
  },
  watch: {
    currentCurrency(newVal) {
      console.log(newVal);
      this.toZeroQ2();
      this.toZeroQ3();
    },
    // question 2
    currencyA(newVal) {
      let rate = this.rateData[this.currentCurrency];
      this.currencyB = newVal / rate;
    },
  },
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
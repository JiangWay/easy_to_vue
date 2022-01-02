<template>
  <div class="MetodsAndComputedAndWatch">
    <h2>2. Computed Get And Set</h2>
    <h3>公尺英尺轉換</h3>
    <ul>
      <li>
        pls input 公尺 :
        <input type="text" v-model="meters" @click="clearMeters" />
      </li>
      <li>
        pls input 英尺 :
        <input type="text" v-model="feet" @click="clearMeters" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "MetodsAndComputedAndWatch",
  data() {
    return {
      meters: 0,
      // feet: 0,
      rate: 3.2808399, // 公尺換成英尺
    };
  },
  methods: {
    clearMeters() {
      this.meters = "";
    },
  },
  computed: {
    // feet() {
    //   return this.meters * this.rate;
    // },
    feet: {
      get() {
        return this.meters * this.rate;
      },
      set(val) {
        this.meters = val / this.rate;
      },
    },
  },
  watch: {},
};
</script>
<style lang="scss" scoped>
ul {
  width: 700px;
  li {
    display: flex;
    justify-content: left;
    width: 700px;
  }
}
</style>
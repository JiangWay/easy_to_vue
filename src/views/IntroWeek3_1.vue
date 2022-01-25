<template>
  <div class="introWeek2 w-full p-2">
    <h1>I'm introWeek3_1</h1>
    <div class="divider"></div>
    <div class="btn" @click="callBusAlert()">呼叫 busAlert!</div>
    <div class="divider"></div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  components: {},
  data() {
    return {};
  },
  created() {
    this.createBusAlert();
    this.$bus.$emit("setAppHeader", {
      title: "第三週功能介紹",
      leftIcon: "hamburger", // leftArrow
    });
  },
  methods: {
    // 通常會在app.vue那邊創建
    // 使用
    // 全域彈窗
    createBusAlert() {
      this.$bus.$on("busAlert", (msg) => this.busAlert(msg));
    },
    busAlert(msg) {
      alert(msg);
    },
    callBusAlert() {
      this.$bus.$emit("busAlert", "呼叫 busAlert!");
    },
  },
  computed: {},
  watch: {},
};
</script>
<style lang="scss" scoped></style>

<template>
  <div class="flex justify-center">
    <div class="btn" @click="pageMinus()">上一頁</div>
    <div>第{{ page }}頁</div>
    <div class="btn" @click="pageAdd()">下一頁</div>
  </div>
</template>

<script>
export default {
  props: {
    pageIndex: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      page: 1,
    };
  },
  created() {
    // warn 消失啦
    this.page = this.pageIndex;
  },
  methods: {
    pageAdd() {
      this.page++;
      this.$emit("update:pageIndex", this.page);
    },
    pageMinus() {
      this.page--;
      this.$emit("update:pageIndex", this.page);
    },
  },
};
</script>

<style>
</style>
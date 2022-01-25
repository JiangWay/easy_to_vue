<template>
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
      <tr v-for="ubike in ubikeList" :key="ubike.sno">
        <th>{{ ubike.sno }}</th>
        <td>{{ ubike.sna }}</td>
        <td>{{ ubike.sbi }}/{{ ubike.tot }}</td>
        <th @click="addMyFavorite(ubike)" class="btn btn-success">加入最愛</th>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    ubikeList: {
      type: Array,
      default: () => [],
    },
    myFavoriteList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      list: this.myFavoriteList,
    };
  },
  methods: {
    addMyFavorite(ubike) {
      if (this.list.find((b) => b.sno === ubike.sno)) {
        alert("不可重複加入");
        return;
      }
      console.log("addMyFavorite");
      this.list.push(ubike);
      console.log(this.list);
      this.$emit("update:myFavoriteList", this.list);
    },
  },
};
</script>

<style>
</style>
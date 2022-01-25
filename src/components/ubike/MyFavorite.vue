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
      <tr v-for="ubike in list" :key="ubike.sno">
        <th>{{ ubike.sno }}</th>
        <td>{{ ubike.sna }}</td>
        <td>{{ ubike.sbi }}/{{ ubike.tot }}</td>
        <th @click="removeMyFavorite(ubike)" class="btn btn-error">移除</th>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    myFavoriteList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      // list: this.myFavoriteList,
    };
  },
  computed: {
    list() {
      return this.myFavoriteList;
    },
  },
  methods: {
    removeMyFavorite(ubike) {
      let list = this.list.filter((b) => b.sno !== ubike.sno);
      console.log(list);
      this.$emit("update:myFavoriteList", list);
    },
  },
};
</script>

<style>
</style>
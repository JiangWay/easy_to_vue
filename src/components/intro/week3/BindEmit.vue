<template>
  <div class="flex flex-col introWeek2 border-2 border-black">
    <div>I'm Bind Emit</div>
    <div>我是String</div>
    <!-- 直接動props會出警告 -->
    <input type="text" v-model="msg" />

    <div v-if="insideMsgObj.title !== 'default'">
      <div>我是Object 用emit來實現更動父值</div>
      <input type="text" v-model="insideMsgObj.title" />
      <input type="text" v-model="insideMsgObj.msg" />
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  props: {
    msg: {
      type: String,
      default: "default",
    },
    msgObj: {
      type: Object,
      default: () => ({
        title: "default",
        msg: "test default",
      }),
    },
  },
  data() {
    return {
      // insideMsgObj: this.msgObj,
      // Object.assign() 或者 JSON.parse(JSON.stringify())
      // 斷開連結
      insideMsgObj: Object.assign({}, this.msgObj),
    };
  },
  async created() {},
  methods: {},
  computed: {},
  watch: {
    msg(newVal, oldVal) {
      console.log(newVal);
      console.log(oldVal);
      this.$emit("update:msg", newVal);
    },
    // insideMsgObj(newVal, oldVal) {
    //   console.log(newVal);
    //   console.log(oldVal);
    // },
    // watch物件的方法
    // "insideMsgObj.title"(newVal, oldVal) {
    //   console.log(newVal);
    //   console.log(oldVal);
    //   this.insideMsgObj.title = newVal;
    //   this.$emit("update:msgObj", this.insideMsgObj);
    // },
    insideMsgObj: {
      handler(newVal, oldVal) {
        console.log(newVal);
        console.log(oldVal);
        this.$emit("update:msgObj", newVal);
      },
      //當欲觀察值的特性為 call by reference，例如 Object 時，需將 deep 值設定為 true，告知 watch 需要深度觀察。否則會因為特性關係，無法觸發監聽器。
      deep: true,
    },
  },
  BeforeRouteEnter(to, from, next) {
    next(() => {});
  },
};
</script>
<style lang="scss" scoped></style>

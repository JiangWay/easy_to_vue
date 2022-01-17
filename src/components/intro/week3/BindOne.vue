<template>
  <div class="flex flex-col introWeek2 border-2 border-black">
    <div>I'm Bind One 11111</div>
    <input type="text" v-model="msg" />

    <div v-if="insideMsgObj.title !== 'default'">
      <div>沒斷開連結</div>
      <input type="text" v-model="msgObj.title" />
      <input type="text" v-model="msgObj.msg" />
      <div>斷開連結</div>
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
  watch: {},
  BeforeRouteEnter(to, from, next) {
    next(() => {});
  },
};
</script>
<style lang="scss" scoped></style>

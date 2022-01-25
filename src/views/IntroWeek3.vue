<template>
  <div class="introWeek2 w-full p-2">
    <h1>I'm introWeek3</h1>
    <div class="divider pt-10"></div>
    <div class="example-1">
      <div class="text-4xl">說明 : 如何綁定</div>
      <div class="text-2xl">物件傳子元件時 要特別注意 不要造成污染</div>
      <div>外層msg {{ msg }}</div>
      <div>外層msgObj {{ msgObj }}</div>
      <BindOne v-bind:msg="msg" v-bind:msgObj="msgObj" />
      <!-- <BindOne :msg="msg" :msgObj="msgObj" />
      <BindOne msg="msg" /> -->
    </div>
    <div class="divider pt-10"></div>
    <div class="example-1">
      <div class="text-4xl">說明 : 子傳父</div>
      <div class="text-2xl">雙向綁定正確姿勢</div>
      <div class="text-2xl">props in emit out</div>
      <div>外層msg {{ msgEmit }}</div>
      <div>外層msgObj {{ msgObj }}</div>
      <!--  sync 語法糖 -->
      <BindEmit v-bind:msg.sync="msgEmit" v-bind:msgObj.sync="msgObjEmit" />
    </div>
    <div class="divider pt-10"></div>
    <div class="example-2">
      <div class="text-4xl">說明 : 動態綁定</div>
      <button class="btn" @click="changeBind()">點擊切換</button>
      <div>case 1</div>
      <BindOne v-if="useBindOne" />
      <BindTwo v-else />
      <div>case 2</div>
      <component :is="currentBindComponet" />
    </div>
    <div class="divider pt-10"></div>
    <div class="example-3">
      <div class="text-4xl">說明 : keepAlive</div>
      <button class="btn" @click="changeBindNumber()">點擊切換</button>
      <keep-alive include="BindOne,BindTwo">
        <BindOne v-if="bindNumber === 1" />
        <BindTwo v-if="bindNumber === 2" />
        <BindThree v-if="bindNumber === 3" />
      </keep-alive>
    </div>
    <div class="divider pt-10"></div>
    <div class="example-4">
      <div class="text-4xl">說明 : keepAlive 做在router-view上</div>
      <div>
        用途 : 在一些表單的頁面上 有說明頁時 使用者在表單填一半的時候
        去到說明頁再回來時 表單內容需被保留
      </div>
      <div>範例就拿此頁做keepAlive 程式範例請移駕App.vue</div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapState, mapActions, mapGetters } from "vuex";
import BindOne from "@/components/intro/week3/BindOne.vue";
import BindTwo from "@/components/intro/week3/BindTwo.vue";
import BindThree from "@/components/intro/week3/BindThree.vue";
import BindEmit from "@/components/intro/week3/BindEmit.vue";
export default {
  // 注意: keepAlive需要name 而不是吃router的name
  name: "IntroWeek3",
  components: { BindOne, BindTwo, BindThree, BindEmit },
  data() {
    return {
      msg: "msg wyn test 1",
      msgTwo: "msg wyn test 2",
      msgThree: "msg wyn test 3",
      msgEmit: "msg wyn test emit",
      msgObj: {
        title: "msgObj wyn",
        msg: "test outside",
      },
      msgObjEmit: {
        title: "msgObj wyn emit",
        msg: "test outside emit",
      },
      useBindOne: true,
      bindNumber: 1,
    };
  },
  async created() {},
  methods: {
    changeBind() {
      this.useBindOne = !this.useBindOne;
    },
    changeBindNumber() {
      this.bindNumber++;
      if (this.bindNumber > 3) {
        this.bindNumber = 1;
      }
      console.log(this.bindNumber);
      console.log(this.bindNumber > 4);
    },
  },
  computed: {
    currentBindComponet() {
      return this.useBindOne ? "BindOne" : "BindTwo";
    },
  },
  watch: {},
  BeforeRouteEnter(to, from, next) {
    next(() => {});
  },
  // keepAlive的生命週期
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
};
</script>
<style lang="scss" scoped></style>

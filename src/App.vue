<template>
  <div class="drawer h-screen h-200">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <header class="sticky top-0 z-50">
        <Header class="rounded-none" />
      </header>
      <main class="">
        <!-- <keep-alive :max="3" :include="['ExchangeRate']">
          <router-view />
        </keep-alive> -->
        <keep-alive :max="3" :include="getkeepAliveList">
          <router-view />
        </keep-alive>
      </main>
    </div>
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <div class="divider">Menu</div>
        <li v-for="item in menuItemList" :key="item.idx">
          <router-link :to="item.to">{{ item.desc }}</router-link>
        </li>
        <div class="divider">練習</div>
        <li v-for="item in practiceItemList" :key="item.idx">
          <router-link :to="item.to">{{ item.desc }}</router-link>
        </li>
        <div class="divider">Intro</div>
        <li v-for="item in introItemList" :key="item.idx">
          <router-link :to="item.to">{{ item.desc }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
const MenuItemList = [
  { idx: "m0", to: "/", desc: "Home" },
  { idx: "m1", to: "/about", desc: "About" },
];
const PracticeItemList = [
  { idx: "p0", to: "/exchangeRate", desc: "匯率換算" },
  { idx: "p1", to: "/UBike", desc: "ubike!" },
];
const IntroItemList = [
  { idx: "i0", to: "/IntroWeek1", desc: "IntroWeek1(跑版QQ)" },
  { idx: "i1", to: "/IntroWeek2", desc: "IntroWeek2" },
  { idx: "i2", to: "/IntroWeek3", desc: "IntroWeek3" },
];
export default {
  components: { Header },
  data() {
    return {
      menuItemList: MenuItemList,
      practiceItemList: PracticeItemList,
      introItemList: IntroItemList,
    };
  },
  computed: {
    getkeepAliveList() {
      return ["IntroWeek3"];
    },
  },
};
</script>


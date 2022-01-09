<template>
  <div id="app">
    <header class="sticky top-0 z-50 m-4">
      <Header />
    </header>
    <div class="rounded-lg shadow bg-base-200 drawer">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div
        class="flex flex-col items-center justify-center drawer-content pb-64"
      >
        <router-view />
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
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<template>
  <div class="MetodsAndComputedAndWatch">
    <h2>1. Methods and computed and watch</h2>
    <ul>
      <li>
        pls input your name :
        <input type="text" v-model="myName" />
        <button @click="getMyReverseName()">getMyReverseName</button>
      </li>
      <li>
        <div>data : {{ myName }}</div>
      </li>
      <li>
        <div>methods: {{ reverseName }}</div>
      </li>
      <li>
        <div>computed: {{ myReverseName }}</div>
      </li>
      <li>
        <div>watch: {{ watchReverseName }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MetodsAndComputedAndWatch",
  data() {
    return {
      myName: "",
      reverseName: "",
      watchReverseName: "",
    };
  },
  methods: {
    getMyReverseName() {
      this.reverseName = "methods --> " + this.doReverseName(this.myName);
    },
    doReverseName(name) {
      return name.split("").reverse().join("");
    },
  },
  computed: {
    myReverseName() {
      if (this.myName.length <= 0) return "";

      return "computed --> " + this.doReverseName(this.myName);
    },
  },
  watch: {
    myName(newVal, oldVal) {
      console.log(newVal);
      console.log(oldVal);
      if (this.myName.length <= 0) return "";
      this.watchReverseName = "watch --> " + this.doReverseName(this.myName);
    },
  },
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
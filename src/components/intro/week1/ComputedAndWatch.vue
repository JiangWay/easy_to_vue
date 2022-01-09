<template>
  <div class="MetodsAndComputedAndWatch">
    <h2>3. Computed And Watch</h2>
    <h3>compmuted 不可執行非同步</h3>
    <h3>watch 可執行非同步</h3>
    <h3>
      <a href="https://cn.vuejs.org/v2/guide/computed.html" target="_blank"
        >兩者差異參考1</a
      >
      |
      <a
        href="https://peterhpchen.github.io/VuejsQuest/basic/09_ComputedVSWatch.html#%E8%A8%88%E7%AE%97%E5%B1%AC%E6%80%A7%E9%81%A9%E7%94%A8%E5%A0%B4%E6%99%AF"
        target="_blank"
        >兩者差異參考2</a
      >
    </h3>
    <ul>
      <li>
        Ask a yes/no question:
        <input v-model="question" />
      </li>
      <li>
        <p>{{ answer }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ComputedAndWatch",
  data() {
    return {
      question: "",
      answer: "I cannot give you an answer until you ask a question!",
      debouncedGetAnswer: () => {},
    };
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function () {
      this.answer = "Waiting for you to stop typing...";
      this.debouncedGetAnswer();
    },
  },
  created: function () {
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    this.debouncedGetAnswer = this.$lodash.debounce(this.getAnswer, 500);
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf("?") === -1) {
        this.answer = "Questions usually contain a question mark. ;-)";
        return;
      }
      this.answer = "Thinking...";
      var vm = this;
      this.$axios
        .get("https://yesno.wtf/api")
        .then(function (response) {
          vm.answer = vm.$lodash.capitalize(response.data.answer);
        })
        .catch(function (error) {
          vm.answer = "Error! Could not reach the API. " + error;
        });
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
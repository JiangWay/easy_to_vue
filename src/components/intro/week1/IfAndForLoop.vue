<template>
  <div class="ForLoop">
    <h2>4.if And ForLoop</h2>
    <h3>v-if</h3>
    <div>
      請輸入你最不愛的水果 讓他消失：
      <input v-model="favoriteFruit" />
      <div v-if="榴蓮">消失吧 榴蓮</div>
      <div v-else-if="夏威夷披薩">消失吧 榴蓮</div>
      <div v-else>每個水果都有他的好 別亂來</div>
    </div>
    <h3>v-for</h3>

    <ul>
      <li v-for="(fruit, idx) in fruitData" :key="idx">
        {{ idx + 1 }}.{{ fruit }}
      </li>
    </ul>
    <h3>下拉選單</h3>
    <select v-model="selectedFruit">
      <option
        v-for="(fruit, idx) in fruitData"
        :key="idx"
        :selected="fruit === 'apple'"
      >
        {{ fruit }}
      </option>
    </select>
    <span>Selected: {{ selectedFruit }}</span>
  </div>
</template>
<script>
export default {
  name: "IfAndForLoop",
  data() {
    return {
      hateFruit: "",
      fruitData: ["apple", "orange", "banana", "applePen"],
      selectedFruit: "apple",
    };
  },
  methods: {},
  computed: {},
  watch: {},
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
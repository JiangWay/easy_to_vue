<template>
  <div class="exchangeRate">
    <h1>This is the intro page</h1>
    <MetodsAndComputedAndWatch />
    <hr />
    <ComputedGetAndSet />
    <hr />
    <ComputedAndWatch />
    <hr />
    <IfAndForLoop />
    <hr />
  </div>
</template>

<script>
import MetodsAndComputedAndWatch from "@/components/intro/week1/MetodsAndComputedAndWatch.vue";
import ComputedGetAndSet from "@/components/intro/week1/ComputedGetAndSet.vue";
import ComputedAndWatch from "@/components/intro/week1/ComputedAndWatch.vue";
import IfAndForLoop from "@/components/intro/week1/IfAndForLoop.vue";
export default {
  data() {
    return {};
  },
  components: {
    MetodsAndComputedAndWatch,
    ComputedGetAndSet,
    ComputedAndWatch,
    IfAndForLoop,
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
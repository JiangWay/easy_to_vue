<template>
  <div>
    <h1>I'm RouterExample</h1>
    <p class="text-base">query = {{ queryValue }}</p>
    <p class="text-base">params = {{ paramsValue }}</p>
  </div>
</template>

<script>
export default {
  created() {},
  computed: {
    queryValue() {
      return this.$route.query;
    },
    paramsValue() {
      return this.$route.params;
    },
  },
};
</script>

<style>
</style>
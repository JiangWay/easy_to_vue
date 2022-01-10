<template>
  <div class="grid grid-cols-4 gap-4">
    <button
      class="btn"
      @click="
        $router.push({
          name: 'RouterExample',
          query: { plan: 'private' },
          params: { name: 'wayne' },
        })
      "
    >
      name + params + query
    </button>
    <button
      class="btn"
      @click="
        $router.push({
          path: '/IntroWeek2/routerExample',
          query: { plan: 'private' },
          params: { name: 'wayne' },
        })
      "
    >
      path + params + query
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
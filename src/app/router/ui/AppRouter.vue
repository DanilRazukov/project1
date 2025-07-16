<script setup lang="ts">

</script>

<template>
  <Suspense>
    <template #default>
      <RouterView />
    </template>
    <template #fallback>
      Loading
    </template>
  </Suspense>
</template>

<style scoped lang="scss">

</style>

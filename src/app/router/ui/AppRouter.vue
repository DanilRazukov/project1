<script setup lang="ts">
import { PageLoader } from "widgets/PageLoader";
</script>

<template>
  <Suspense>
    <template #default>
      <RouterView />
    </template>
    <template #fallback>
      <PageLoader />
    </template>
  </Suspense>
</template>

<style scoped lang="scss">

</style>

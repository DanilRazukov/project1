<script setup lang="ts">
import { Loader } from "shared/ui";

</script>

<template>
  <div class="page-loader">
    <Loader />
  </div>
</template>

<style scoped lang="scss">
.page-loader {
  min-height: calc(100vh - var(--navbar-height));
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}


</style>

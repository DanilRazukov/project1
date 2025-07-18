<script setup lang="ts">
import { AppRouter } from "app/router";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
</script>

<template>
  <Navbar />
  <main
    class="content"
  >
    <Sidebar />
    <div class="content__page">
      <AppRouter />
    </div>
  </main>
</template>

<style scoped lang="scss">
.content {
  display: flex;

  &__page {
    flex-grow: 1;
  }
}
</style>

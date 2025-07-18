<script setup lang="ts">
import {changeLocale, SUPPORT_LOCALES} from "shared/config";

</script>

<template>
  <div>
    Main Page
    <button @click="changeLocale(SUPPORT_LOCALES.EN)">
      setLocale en
    </button>
    <button @click="changeLocale(SUPPORT_LOCALES.RU)">
      setLocale ru
    </button>
  </div>
</template>

<style scoped lang="scss">

</style>

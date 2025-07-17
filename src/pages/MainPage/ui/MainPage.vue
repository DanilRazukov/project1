<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

function setLocale(val: string): void {
  locale.value = val
}
</script>

<template>
  <div>
    Main Page
    <button @click="setLocale('en')">
      setLocale en
    </button>
    <button @click="setLocale('ru')">
      setLocale ru
    </button>
  </div>
</template>

<style scoped lang="scss">

</style>

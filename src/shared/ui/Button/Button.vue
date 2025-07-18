<script setup lang="ts">
import { defineSlots } from 'vue';
import { THEME_BUTTON } from "shared/ui/Button/ButtonTypes";

interface IProps {
  theme: THEME_BUTTON;
}

const props = withDefaults(defineProps<IProps>(), {
  theme: THEME_BUTTON.PRIMARY
})

defineSlots()

</script>

<template>
  <button class="button" :class="theme">
    <slot name="content"/>
  </button>
</template>

<style scoped lang="scss">
.button {
  cursor: pointer;
  padding: 0;
  border: none;
  outline: none;
  background: none;

  &.clear {
    padding: 8px;
  }
}
</style>

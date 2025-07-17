<script setup lang="ts">
import { defineProps, defineSlots } from 'vue';
interface IProps {
  to: string;
}

defineProps<IProps>()
defineSlots()

</script>

<template>
  <RouterLink
    :to="to"
    class="app-link"
    active-class="app-link_active"
  >
    <slot name="title" />
  </RouterLink>
</template>

<style scoped lang="scss">
.app-link {
  font-size: var(--font-line-m);
  color: var(--secondary-color);
  text-decoration: none;

  &_active {
    color: var(--primary-color);
  }
}
</style>

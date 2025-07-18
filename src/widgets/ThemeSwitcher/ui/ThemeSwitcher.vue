<script setup lang="ts">
import { computed } from "vue";

import MoonIcon from 'shared/assets/icons/moon.svg'
import SunIcon from "shared/assets/icons/sun.svg"
import { useTheme, THEME } from "shared/theme";
import { Button, THEME_BUTTON } from "shared/ui";

const {
  theme,
  switchTheme
} = useTheme()

const getCurrentIcon = computed(() => {
  if (theme.value === THEME.LIGHT) {
    return SunIcon
  }
  return MoonIcon
})
</script>

<template>
  <Button
    :theme="THEME_BUTTON.PRIMARY"
    @click="switchTheme"
  >
    <template #content>
      <component
        :is="getCurrentIcon"
        width="40px"
        height="40px"
      />
    </template>
  </Button>
</template>

<style scoped lang="scss">

</style>

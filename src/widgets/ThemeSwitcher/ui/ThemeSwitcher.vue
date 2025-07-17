<script setup lang="ts">
import {computed} from "vue";
import {useTheme, THEME} from "shared/theme";
import SunIcon from "shared/assets/icons/sun.svg"
import MoonIcon from 'shared/assets/icons/moon.svg'
import {Button, THEME_BUTTON} from "shared/ui";

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
    @click="switchTheme"
    :theme="THEME_BUTTON.PRIMARY"
  >
    <template #content>
      <component :is="getCurrentIcon" width="40px" height="40px"/>
    </template>
  </Button>
</template>

<style scoped lang="scss">

</style>

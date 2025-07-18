<script setup lang="ts">
import { useI18n } from "vue-i18n";

import { SUPPORT_LOCALES, changeLocale } from "shared/config";
import { Button, THEME_BUTTON } from "shared/ui";

const { locale } = useI18n()

function handleChangeLanguage(): void {
  changeLocale(locale.value === SUPPORT_LOCALES.RU ? SUPPORT_LOCALES.EN : SUPPORT_LOCALES.RU)
}

</script>

<template>
  <Button
    :theme="THEME_BUTTON.CLEAR"
    class="lang-switcher"
    @click="handleChangeLanguage"
  >
    <template #content>
      <span class="lang-switcher__label">
        {{ $t('lang') }}
      </span>
    </template>
  </Button>
</template>

<style scoped lang="scss">
.lang-switcher {
  &__label {
    color: var(--primary-color);
    font-size: 20px;
  }
}
</style>

<script setup lang="ts">
import { RoutePath, APP_ROUTES } from "shared/config";
import {AppLink} from "shared/ui";

const routeNames: Record<APP_ROUTES, string> = {
  [APP_ROUTES.MAIN]: 'Main',
  [APP_ROUTES.ABOUT]: 'About'
}

</script>

<template>
  <nav class="navbar">
    <div class="navbar__logo">
      LOGO
    </div>
    <div class="navbar__links">
      <AppLink
        v-for="(link, key) in RoutePath"
        :to="link"
        >
        <template #title>
          {{ routeNames[key] }}
        </template>
      </AppLink>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 16px 8px;
  height: var(--navbar-height);
  background: var(--inverted-bg-color);

  &__links {
    display: flex;
    gap: 8px;
  }
}
</style>

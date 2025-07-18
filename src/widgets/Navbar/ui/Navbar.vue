<script setup lang="ts">
import { RoutePath, APP_ROUTES } from "shared/config";
import { AppLink } from "shared/ui";

const routeNames: Record<APP_ROUTES, string> = {
  [APP_ROUTES.MAIN]: "navbar.main",
  [APP_ROUTES.ABOUT]: "navbar.about"
}

function isAppRoute(value: string): value is APP_ROUTES {
  return Object.values(APP_ROUTES).includes(value as APP_ROUTES);
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
        :key="key"
        :to="link"
      >
        <template #title>
          {{ $t(isAppRoute(key) ? routeNames[key] : '') }}
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

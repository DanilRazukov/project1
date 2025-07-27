<script setup lang="ts">
import { RoutePath, APP_ROUTES } from "shared/config";
import { AppLink } from "shared/ui";

type navbarRoutesType = Exclude<APP_ROUTES, APP_ROUTES.NOT_FOUND>

const routeNames: Record<navbarRoutesType, string> = {
  [APP_ROUTES.MAIN]: "navbar.main",
  [APP_ROUTES.ABOUT]: "navbar.about"
}

const navbarRoutes: Record<navbarRoutesType, string> = {
  [APP_ROUTES.MAIN]: RoutePath.main,
  [APP_ROUTES.ABOUT]: RoutePath.about
}

function isAppRoute(value: string): value is navbarRoutesType {
  return Object.values(APP_ROUTES).includes(value as navbarRoutesType);
}

</script>

<template>
  <nav class="navbar">
    <div class="navbar__logo">
      LOGO
    </div>
    <div class="navbar__links">
      <AppLink
        v-for="(link, key) in navbarRoutes"
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

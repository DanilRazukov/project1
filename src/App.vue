<script setup lang="ts">
import { useTheme, Theme } from "./theme/useTheme"

const {
  setTheme
} = useTheme()

</script>

<template>

  <h1>Hello App!</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
  <div>
    <button @click="setTheme(Theme.DARK)">
      Dark Theme
    </button>
    <button @click="setTheme(Theme.LIGHT)">
      White Theme
    </button>
  </div>
  <main>
    <Suspense>
      <template #default>
        <RouterView />
      </template>
      <template #fallback>
        Loading
      </template>
    </Suspense>
  </main>
</template>

<style scoped>

</style>

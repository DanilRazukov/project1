<script setup lang="ts">
import { useTheme, Theme } from "shared/theme"
import {AppRouter} from "app/router";
import {Navbar} from "widgets/Navbar";

const {
  setTheme
} = useTheme()

</script>

<template>
  <Navbar/>
  <div>
    <button @click="setTheme(Theme.DARK)">
      Dark Theme
    </button>
    <button @click="setTheme(Theme.LIGHT)">
      White Theme
    </button>
  </div>
  <main>
    <AppRouter />
  </main>
</template>

<style scoped>

</style>

<script setup lang="ts">
import { ref } from "vue";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";

const isCollapsed = ref<boolean>(false)

function changeIsCollapsed() {
  isCollapsed.value = !isCollapsed.value
}
</script>

<template>
  <div
    class="sidebar"
    :class="[
      {'sidebar_collapsed': isCollapsed},
    ]"
  >
    <button @click="changeIsCollapsed">
      Toggle
    </button>

    <div class="sidebar__theme">
      <ThemeSwitcher/>
      <LangSwitcher />
    </div>
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  height: calc(100vh - var(--navbar-height));
  width: var(--sidebar-width);
  background: var(--inverted-bg-color);
  position: relative;
  transition: width 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;

  &_collapsed {
    width: var(--sidebar-width-collapsed);
  }

  &__theme {
    position: absolute;
    bottom: 50px;
    display: flex;
    gap: 10px;
  }
}
</style>

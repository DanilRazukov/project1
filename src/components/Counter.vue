<script setup lang="ts">
import {ref} from "vue";

const counter = ref(0)

function increment(): void {
  counter.value++
}

function decrement(): void {
  counter.value--
}
</script>

<template>
  <div class="counter">
    <p class="counter__value">
      {{ counter }}
    </p>
    <div class="counter__buttons">
      <button
        class="counter__increment"
        @click="increment"
      >
        Increment
      </button>
      <button
        class="counter__decrement"
        @click="decrement"
      >
        Decrement
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.counter {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;

  &__value {
    font-size: 16px;
    color: green;
  }

  &__buttons {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  &__increment, &__decrement {
    padding: 8px 16px;
    border-radius: 4px;
    text-align: center;
  }

  &__increment {
    background: green;
  }

  &__decrement {
    background: red;
  }
}
</style>

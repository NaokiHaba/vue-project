<script setup lang="ts">
import { ref } from "vue"

const count = ref(0)

const increment = () => {
  count.value++
}
</script>

<template>
  <main>
    <h1>Count is: {{ count }}</h1>
    <button @click="increment">Increment</button>
  </main>
</template>

<style scoped>
</style>

<script setup lang="ts">
import { ref } from "vue"

const titleClass = ref('title')

</script>

<template>
  <main>
    <h1 :class="titleClass">
      Make me red
    </h1>
  </main>
</template>

<style scoped>

.title {
  color: red;
}
</style>

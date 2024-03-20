<script setup lang="ts">

import { reactive, ref } from "vue"

const count = reactive({
  value: 0
})

const message = ref("Hello Vue 3")

</script>

<template>
  <main>
    <h1>{{ message }}</h1>
    <button @click="count.value++">Count is: {{ count.value }}</button>
  </main>
</template>
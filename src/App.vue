<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <header>
      <nav>
        <RouterLink to="/step02">step02</RouterLink>
        <RouterLink to="/step03">step03</RouterLink>
        <RouterLink to="/step04">step04</RouterLink>
      </nav>
    </header>
    <main>
      <RouterView/>
    </main>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-rows: auto 1fr;
  align-items: center;
}

header {
  display: flex;
  align-items: center;
  padding: 1rem;
}

main {
  justify-content: center;
  align-items: center;
}
</style>
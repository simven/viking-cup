<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <Header />

  <main class="pt-5 pb-16 max-w-screen-2xl mx-auto px-10">
    <RouterView />
  </main>
</template>

<style scoped>
</style>

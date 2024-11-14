<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header />

  <main class="pt-16 sm:pt-24 pb-16">
    <RouterView />
  </main>

  <Footer />
</template>

<style scoped>
</style>

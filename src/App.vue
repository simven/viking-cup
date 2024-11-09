<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header />

  <main class="pt-5 pb-16 max-w-screen-2xl mx-auto px-10">
    <RouterView />
  </main>

  <Footer />
</template>

<style scoped>
</style>

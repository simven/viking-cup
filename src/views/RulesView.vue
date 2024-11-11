<script setup lang="ts">
import Title from '@/components/Title.vue'
</script>

<template>
  <div class="flex flex-col justify-center items-center pt-6 sm:pt-14 max-w-5xl m-auto gap-10 md:gap-14 lg:gap-20">
    <Title>
      <template #title>
        RÈGLES
      </template>
    </Title>

    <div class="mt-10">
      <a
        href="/viking-cup-rules.pdf"
        target="_blank"
        class="font-finder bg-red rounded-md p-4 text-xl transition-all duration-200 hover:saturate-150">
        Voir les règles
      </a>
    </div>
  </div>
</template>

<style>
</style>

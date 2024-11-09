<script setup lang="ts">
defineProps<{
  linkPath: string
}>()
</script>

<template>
  <div class="col-span-2 md:col-span-1 bg-primary rounded-xl aspect-video shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-primary-light hover:shadow-2xl">
    <RouterLink :to="linkPath" class="h-full p-4 md:p-6 flex justify-center items-center text-center">
      <h2><slot name="label"></slot></h2>
    </RouterLink>
  </div>
</template>

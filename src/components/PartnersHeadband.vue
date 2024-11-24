<script setup lang="ts">

import { ref } from 'vue'

const partners = ref<{ url: string; src: string; alt: string }[]>([
  { url: 'https://www.ffsa.org', src: '/img/ffsa.webp', alt: 'FFSA' },
  { url: 'https://driftfrance.com', src: '/img/cfd.webp', alt: 'CFD' },
  { url: 'https://www.sportautonormandie.fr', src: '/img/lsan.webp', alt: 'LSAN' },
  { url: 'https://asapaysdedieppe.fr', src: '/img/asa.webp', alt: 'ASA' },
]);

</script>

<template>
  <div class="w-full py-10 border-b border-primary">
    <div class="grid grid-cols-4 gap-4 sm:gap-10 lg:gap-16 w-11/12 md:w-10/12 mx-auto">
      <a
        :href="partner.url" target="_blank"
        class="col-span-1 flex items-center justify-center p-1.5 sm:p-3 bg-white hover:bg-white rounded-xl backdrop-blur-md cursor-pointer transition-all duration-300 ease-in-out hover:saturate-150 hover:-translate-y-1"
        v-for="(partner, index) in partners"
        :key="index">
        <img :src="partner.src" :alt="partner.alt" class="w-40"/>
      </a>

    </div>
  </div>
</template>

<style scoped>
</style>

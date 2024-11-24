<script setup lang="ts">
import Title from '@/components/Title.vue'
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://www.billetweb.fr/js/export.js';
  script.type = 'text/javascript';
  script.async = true;
  document.body.appendChild(script);
});
</script>

<template>
  <div class="flex flex-col justify-center items-center py-32 sm:py-40 max-w-7xl m-auto px-10">
    <Title>
      <template #title>
        Billetterie
      </template>
    </Title>

    <div class="w-full mt-12 md:mt-16">
      <div class="text-center">
        <div data-aos="fade-up">
          <p>Bienvenue sur la billetterie de la Viking!Cup !</p>
          <p class="hidden sm:block">Venez vibrer au rythme des dérapages, des battles spectaculaires et vivez l’adrénaline d’un baptême de drift, tout en partageant l’énergie d’une compétition unique.</p>
        </div>

        <h3 data-aos="fade-up" class="mt-4">Réservez dès maintenant votre place pour assister à un show inoubliable.</h3>
      </div>

      <div data-aos="fade-up" class="w-full my-14">
        <a
          title="Réserver mes billets"
          href="https://www.billetweb.fr/shop.php?event=viking-cup-2025"
          class="shop_frame w-fit mx-auto items-center font-finder bg-red rounded-md py-3 px-6 sm:py-4 sm:px-8 text-xl md:text-2xl transition-all duration-200 hover:saturate-150"
          style="display: flex"
          target="_blank"
          data-src="https://www.billetweb.fr/shop.php?event=viking-cup-2025"
          data-max-width="100%"
          data-initial-height="600"
          data-scrolling="no"
          data-id="viking-cup-2025"
          data-resize="1">
          Réserver mes billets
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

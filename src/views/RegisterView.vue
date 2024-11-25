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
        Inscription
      </template>
    </Title>

    <div class="w-full mt-12 md:mt-16">
      <div class="text-center">
        <div data-aos="fade-up">
          <p>Rejoignez la compétition en vous inscrivant dès maintenant ! Que vous soyez dans la catégorie Loisir ou Semi-Pro, la Viking!Cup vous offre l’opportunité unique de vivre votre passion du drift dans une ambiance conviviale et compétitive.</p>
        </div>
      </div>

      <div data-aos="fade-up" class="w-full my-14">
        <a
          title="M'inscrire en tant que pilote"
          href="https://www.billetweb.fr/shop.php?event=viking-cup-pilotes"
          class="shop_frame w-fit mx-auto items-center font-finder bg-black rounded-md py-3 px-3 text-xl transition-all duration-200"
          style="display: flex"
          target="_blank"
          data-src="https://www.billetweb.fr/shop.php?event=viking-cup-pilotes"
          data-max-width="100%"
          data-initial-height="600"
          data-scrolling="no"
          data-id="viking-cup-pilotes"
          data-resize="1">
          <img class="-scale-x-100 w-5 h-5" src="/img/finish-flag.webp" alt="Left Finish Flag" width="20" height="20">
          <span class="mx-2">INSCRIPTION</span>
          <img class="w-5 h-5" src="/img/finish-flag.webp" alt="Right Finish Flag" width="20" height="20">
        </a>
      </div>

    </div>

  </div>
</template>

<style scoped>
</style>

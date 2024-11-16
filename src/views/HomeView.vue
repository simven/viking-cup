<script setup lang="ts">
import Countdown from '@/components/Countdown.vue'
import ImageModalable from '@/components/ImageModalable.vue'
</script>

<template>
  <div>
    <div class="relative overflow-hidden md:h-screen">
      <img src="/img/cfd.webp" class="hidden md:block absolute z-10 object-cover object-bottom w-full h-full">
      <img src="/img/cfd-ffsa-tag.webp" class="hidden md:block bottom-5 left-5 absolute z-10 object-cover object-top" width="64" height="86">

      <div class="relative pt-16 sm:pt-24 px-10 z-20">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-2 pt-4">
          <div class="col-span-1 md:col-span-2 flex justify-center items-center">
            <img alt="Viking Cup" src="/img/vk-cup-dates.webp" width="400" height="400" />
          </div>

          <div class="col-span-1 md:col-span-3 flex flex-col items-center justify-center">
            <div class="my-6 md:my-4">
              <h1 class="uppercase text-center py-2 px-4 leading-none">
                Viking!<span class="text-red">Cup</span> 2025
              </h1>

              <p class="text-center">La première compétition régionale de drift en France</p>
            </div>

            <Countdown />

            <div class="my-8">
              <RouterLink to="/inscription" class="font-finder bg-red rounded-md py-3 px-4 text-xl transition-all duration-200 hover:saturate-150">
                S'INSCRIRE
              </RouterLink>
            </div>
          </div>
        </div>

        <div class="text-center mt-20 md:mt-0">
          <h2 class="leading-none">GAGNE TA PLACE POUR LE CFD 2026 !</h2>
        </div>
      </div>
    </div>

    <div class="px-10">
      <div class="py-12 text-center max-w-5xl m-auto">
        <h3>RENDEZ-VOUS au circuit de la ferté gaucher</h3>

        <p class="py-4">Pour cette première édition, la <span class="font-finder">VIKING!<span class="text-red">CUP</span></span> se déroulera en Ile de France au circuit de la Ferté Gaucher.</p>

        <p>Dans le but de maximiser le temps de roulage pour tous, un système de double piste est mis en place. Une piste <span class="font-finder text-red">COMPETITION</span> réservé au déroulement de la <span class="font-finder">VIKING!<span class="text-red">CUP</span></span> et une piste <span class="font-finder text-red">LOISIR</span> accessible à tout les inscrits.</p>
      </div>

      <div class="max-w-4xl mx-auto">
        <ImageModalable
          :img-class="'rounded-xl cursor-pointer border-8 border-black'"
          :src="'/img/vk-cup-track.webp'"
          :alt="'Circuit Viking Cup'"
          :width="'896'"
          :height="'464'"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: clamp(1.5rem, 1.4rem + 3vw, 3.7rem) !important;;
}

h2 {
  font-size: clamp(1.3rem, 1rem + 2vw, 2.7rem) !important;
}
</style>

<script setup lang="ts">
import Title from '@/components/Title.vue'
import TitleSecondary from '@/components/TitleSecondary.vue'
</script>

<template>
  <div class="flex flex-col justify-center items-center py-32 sm:py-40 max-w-7xl m-auto px-10 gap-12 md:gap-20">
    <Title>
      <template #title>Comment participer ?</template>
    </Title>

    <p data-aos="fade-up">Pour participer, inscrivez-vous en ligne et choisissez votre formule : La formule saison complète qui donne accès aux trois dates de l’année pour tenter de remporter la Viking!CUP ou bien la formule journée unique qui donne accès à une seule journée pour le plaisir. Le grand gagnant du championnat annuel en semi-pro aura accès au Championnat de France de Drift 2026 ! Les places sont limitées, alors réservez <span class="whitespace-nowrap">vite !</span></p>

    <div class="grid grid-cols-2 gap-14 md:gap-10">
      <div class="col-span-2 md:col-span-1 flex flex-col items-center">
        <TitleSecondary>
          <template #title>Frais d'inscription</template>
        </TitleSecondary>

        <div class="flex flex-col items-center gap-10 mt-10">
          <div data-aos="fade-up" class="flex flex-col items-center">
            <h3 class="text-5xl">1000€</h3>
            <p class="uppercase">Pour la compétition complète</p>
          </div>

          <TitleSecondary>
            <template #title>OU</template>
          </TitleSecondary>

          <div data-aos="fade-up" class="flex flex-col items-center">
            <h3 class="text-5xl">370€</h3>
            <p class="uppercase">Le week-end</p>
          </div>
        </div>
      </div>

      <div class="col-span-2 md:col-span-1 flex flex-col items-center">
        <TitleSecondary>
          <template #title>Contacts</template>
        </TitleSecondary>

        <div class="flex flex-col gap-10 mt-10">
          <div data-aos="fade-up" class="flex flex-col items-center">
            <div class="flex items-center gap-5">
              <font-awesome-icon class="text-red" :icon="['fas', 'phone']" size="2xl" />

              <a class="underline" href="tel:+33613771446">
                <h3>06 13 77 14 46</h3>
              </a>
            </div>

            <div class="text-center">
              <p>Sébastien Trarieux</p>
              <p class="text-base">Président de l'association Normandie Racing</p>
            </div>
          </div>

          <div data-aos="fade-up" class="flex flex-col items-center">
            <div class="flex items-center gap-5">
              <font-awesome-icon class="text-red" :icon="['fas', 'phone']" size="2xl" />

              <a class="underline" href="tel:+33619112792">
                <h3>06 19 11 27 92</h3>
              </a>
            </div>

            <div class="text-center">
              <p>Maxime Lemasquier</p>
              <p class="text-base">Président adjoint de l'association Normandie Racing</p>
            </div>
          </div>

          <div data-aos="fade-up" class="flex flex-col items-center">
            <div class="flex items-center gap-5">
              <font-awesome-icon class="text-red" :icon="['fas', 'envelope']" size="2xl" />

              <a class="underline" href="mailto:vikingcup14@gmail.com">
                <h3>vikingcup14@gmail.com</h3>
              </a>
            </div>

            <div class="text-center">
              <p class="text-base">Adresse mail officielle de l'événement</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div data-aos="fade-up">
      <RouterLink to="/inscription" class="font-finder bg-red rounded-md py-3 px-6 sm:py-4 sm:px-8 text-xl md:text-2xl transition-all duration-200 hover:saturate-150">
        S'INSCRIRE
      </RouterLink>
    </div>
  </div>
</template>

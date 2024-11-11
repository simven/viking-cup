<script setup lang="ts">
import Title from '@/components/Title.vue'
import RegisterButton from '@/components/RegisterButton.vue'
</script>

<template>
  <div class="flex flex-col justify-center items-center pt-6 sm:pt-14 max-w-5xl m-auto gap-4">
    <Title>
      <template #title>Frais d'inscription</template>
    </Title>

    <h2 class="text-5xl">1000€</h2>
    <p class="uppercase">Pour la compétition complète</p>

    <Title class="my-10">
      <template #title>OU</template>
    </Title>

    <h2 class="text-5xl">370€</h2>
    <p class="uppercase">Le week-end</p>

    <Title class="my-10">
      <template #title>Contacts</template>
    </Title>

    <div class="flex flex-col gap-10">
      <div class="flex flex-col items-center">
        <div class="flex items-center gap-5">
          <font-awesome-icon class="text-red" :icon="['fas', 'phone']" size="2xl" />

          <a class="underline" href="tel:+33613771446">
            <h2>06 13 77 14 46</h2>
          </a>
        </div>

        <div class="text-center">
          <p>Sébastien Trarieux</p>
          <p class="text-base">Président de l'association Normandie Racing</p>
        </div>
      </div>

      <div class="flex flex-col items-center">
        <div class="flex items-center gap-5">
          <font-awesome-icon class="text-red" :icon="['fas', 'phone']" size="2xl" />

          <a class="underline" href="tel:+33619112792">
            <h2>06 19 11 27 92</h2>
          </a>
        </div>

        <div class="text-center">
          <p>Maxime Lemasquier</p>
          <p class="text-base">Président adjoint de l'association Normandie Racing</p>
        </div>
      </div>

      <div class="flex flex-col items-center">
        <div class="flex items-center gap-5">
          <font-awesome-icon class="text-red" :icon="['fas', 'envelope']" size="2xl" />

          <a class="underline" href="mailto:vikingcup14@gmail.com">
            <h2>vikingcup14@gmail.com</h2>
          </a>
        </div>

        <div class="text-center">
          <p class="text-base">Adresse mail officielle de l'événement</p>
        </div>
      </div>
    </div>

    <RegisterButton />
  </div>
</template>

<style scoped>
</style>

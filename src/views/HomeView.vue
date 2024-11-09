<script setup lang="ts">
import Countdown from '@/components/Countdown.vue'
import HomeLinkItem from '@/components/HomeLinkItem.vue'
</script>

<template>
    <div class="grid home-head gap-2">
      <div class="col-span-1 md:col-span-2">
        <img alt="Viking Cup" src="/img/v-cup-dates-logo.png"  />
      </div>

      <div class="col-span-1 md:col-span-3 flex flex-col items-center justify-center">
        <h1 class="hidden md:block uppercase text-4xl">
          Viking!<span class="text-red">Cup</span>
          2K25
        </h1>

        <Countdown />

        <div class="mt-8">
          <RouterLink to="/inscription" class="font-finder bg-red rounded-md p-2 transition-all duration-200 hover:saturate-150">S'INSCRIRE</RouterLink>
        </div>
      </div>
    </div>

    <div class="pt-12 pb-8 text-center">
      <p>La Viking!Cup, c'est <span class="text-red font-bold">bien plus</span> qu'une simple compétition de drift.</p>
    </div>

    <div class="grid home-items gap-4 md:gap-6 bg-secondary rounded-xl py-4 px-6 md:px-12 uppercase">
      <HomeLinkItem link-path="/a-propos">
        <template #label>
          Viking!<span class="text-red">Cup</span>
        </template>
      </HomeLinkItem>

      <HomeLinkItem link-path="/regles">
        <template #label>
          Les règles
        </template>
      </HomeLinkItem>

      <HomeLinkItem link-path="/participer">
        <template #label>
          Comment <span class="whitespace-nowrap">participer ?</span>
        </template>
      </HomeLinkItem>

      <HomeLinkItem link-path="/sponsors">
        <template #label>
          Sponsors
        </template>
      </HomeLinkItem>
    </div>
</template>

<style scoped>
.home-head {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
@media (min-width: 768px) {
  .home-head {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}

.home-items {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
</style>

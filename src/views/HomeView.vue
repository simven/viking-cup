<script setup lang="ts">
</script>

<template>
    <div class="grid home-head gap-2">
      <div class="col-span-1 md:col-span-2">
        <img alt="Viking Cup" src="/img/v-cup-logo.png"  />
      </div>

      <div class="col-span-1 md:col-span-3 flex flex-col items-center justify-center">
        <h1 class="hidden md:block uppercase font-bold text-4xl">
          Viking!<span class="text-red font-bold">Cup</span>
          2K25
        </h1>

        <div class="bg-secondary rounded-xl mt-10 md:mt-4">
          <div class="p-6">
            20j 10min 39sec (🖕🏼)
          </div>
        </div>

        <div class="mt-8">
          <button class="mx-2 px-2.5 lg:px-5 py-1.5 font-bold">S'INSCRIRE</button>
        </div>
      </div>
    </div>

    <div class="pt-12 pb-8 text-center">
      <p>La Viking!Cup, c'est <span class="text-red font-bold">bien plus</span> qu'une simple compétition de drift.</p>
    </div>

    <div class="grid home-items gap-4 md:gap-6 bg-secondary rounded-xl py-4 px-6 uppercase">
      <div class="col-span-2 md:col-span-1 bg-primary rounded-xl aspect-video">
        <div class="h-full p-4 md:p-6 flex justify-center items-center font-bold text-md md:text-3xl text-center">
          Viking!<span class="text-red font-bold">Cup</span>
        </div>
      </div>

      <div class="col-span-2 md:col-span-1 bg-primary rounded-xl aspect-video">
        <div class="h-full p-4 md:p-6 flex justify-center items-center font-bold text-md md:text-3xl text-center">
          Les règles
        </div>
      </div>

      <div class="col-span-2 md:col-span-1 bg-primary rounded-xl aspect-video">
        <div class="h-full p-4 md:p-6 flex justify-center items-center font-bold text-md md:text-3xl text-center">
          Comment participer ?
        </div>
      </div>

      <div class="col-span-2 md:col-span-1 bg-primary rounded-xl aspect-video">
        <div class="h-full p-4 md:p-6 flex justify-center items-center font-bold text-md md:text-3xl text-center">
          Sponsors
        </div>
      </div>
    </div>
</template>

<style scoped>
button {
  @apply rounded-md p-2 transition-all duration-200 hover:saturate-150;
  background: var(--red);
}

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

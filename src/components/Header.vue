<script setup lang="ts">
</script>

<template>
  <header class="w-full relative md:sticky top-0 right-0 left-0 z-50">
    <div class="hidden md:flex justify-between bg-secondary shadow-md py-1 px-4">
      <!-- Logo -->
      <div>
        <a href="/"><img alt="Viking Cup" src="/img/v-cup-logo.png" width="100" /></a>
      </div>

      <!-- NavBar -->
      <nav class="hidden md:flex justify-end items-center" id="navbar-sticky">
        <ul class="flex flex-wrap items-center p-2.5">
          <li>
            <a class="mx-2 px-2.5 lg:px-5 py-1.5">Viking!Cup</a>
          </li>
          <li>
            <a class="mx-2 px-2.5 lg:px-5 py-1.5">Règles</a>
          </li>
          <li>
            <a class="mx-2 px-2.5 lg:px-5 py-1.5">Comment participer</a>
          </li>
          <li>
            <a class="mx-2 px-2.5 lg:px-5 py-1.5">Sponsors</a>
          </li>
          <li>
            <button class="mx-2 px-2.5 lg:px-5 py-1.5">Inscription</button>
          </li>
        </ul>
      </nav>
    </div>


    <div class="w-full flex justify-end items-center md:hidden p-3 absolute top-0">
      <div data-collapse-toggle="navbar-sticky" class=" p-2 w-10 h-10 justify-center text-sm rounded-lg" aria-controls="navbar-sticky" aria-expanded="false">
        <font-awesome-icon :icon="['fas', 'bars']" size="xl" />
      </div>
    </div>

  </header>
</template>

<style scoped>
button {
  @apply rounded-md p-2 transition-all duration-200 hover:saturate-150;
  background: var(--red);
}
</style>

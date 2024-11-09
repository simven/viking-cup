<script setup lang="ts">
</script>

<template>
  <header class="w-full relative md:sticky top-0 right-0 left-0 z-50">
    <div class="hidden md:flex justify-between bg-secondary shadow-md py-1 px-4">
      <!-- Logo -->
      <div>
        <RouterLink to="/"><img alt="Viking Cup" src="/img/v-cup-logo.png" width="80" /></RouterLink>
      </div>

      <!-- NavBar -->
      <nav class="hidden md:flex justify-end items-center" id="navbar-sticky">
        <ul class="flex flex-wrap items-center p-2.5">
          <li>
            <RouterLink to="/a-propos" activeClass="bg-primary" class="rounded-md mx-2 px-2.5 lg:px-5 py-1.5 transition-all duration-200 ease-in-out hover:bg-primary">Viking!<span class="text-red">Cup</span></RouterLink>
          </li>
          <li>
            <RouterLink to="/regles" activeClass="bg-primary" class="rounded-md mx-2 px-2.5 lg:px-5 py-1.5 transition-all duration-200 ease-in-out hover:bg-primary">Règles</RouterLink>
          </li>
          <li>
            <RouterLink to="/participer" activeClass="bg-primary" class="rounded-md mx-2 px-2.5 lg:px-5 py-1.5 transition-all duration-200 ease-in-out hover:bg-primary">Comment participer</RouterLink>
          </li>
          <li>
            <RouterLink to="/sponsors" activeClass="bg-primary" class="rounded-md mx-2 px-2.5 lg:px-5 py-1.5 transition-all duration-200 ease-in-out hover:bg-primary">Sponsors</RouterLink>
          </li>
          <li>
            <RouterLink to="/inscription" class="font-bold bg-red rounded-md mx-2 px-2.5 lg:px-5 py-1.5 transition-all duration-200 hover:saturate-150">Inscription</RouterLink>
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

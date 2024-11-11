<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

watch(
  () => isMobileMenuOpen.value,
  (newVal) => {
    if (newVal) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  },
)

watch(
  () => router.currentRoute.value,
  () => isMobileMenuOpen.value = false,
)
</script>

<template>
  <header class="sticky w-screen top-0 right-0 left-0 inset-0 z-40 bg-secondary shadow-md">
    <nav class="px-6">
      <div class="flex justify-between">
        <!-- Logo -->
        <div class="w-12 sm:w-20">
          <RouterLink to="/"><img alt="Viking Cup" src="/img/v-cup.png" width="80" /></RouterLink>
        </div>

        <!-- NavBar | Desktop -->
        <ul class="hidden sm:flex flex-row items-center text-center p-2.5 gap-2 md:gap-3">
          <li class="hidden md:block">
            <RouterLink to="/" activeClass="bg-black" class="rounded-md px-1 md:px-2 lg:px-5 py-1.5 transition-all duration-200 ease-in-out hover:bg-black">
              Accueil
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/a-propos" activeClass="bg-black" class="rounded-md px-1 md:px-2 lg:px-5 py-1.5 transition-all duration-200 ease-in-out hover:bg-black">
              Viking!<span class="text-red">Cup</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/regles" activeClass="bg-black" class="rounded-md px-1 md:px-2 lg:px-5 py-1.5 transition-all duration-200 ease-in-out hover:bg-black">
              Règles
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/participer" activeClass="bg-black" class="rounded-md px-1 md:px-2 lg:px-5 py-1.5 transition-all duration-200 ease-in-out hover:bg-black">
              Comment participer
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/sponsors" activeClass="bg-black" class="rounded-md px-1 md:px-2 lg:px-5 py-1.5 transition-all duration-200 ease-in-out hover:bg-black">
              Sponsors
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/inscription" class="font-bold bg-red rounded-md px-1 md:px-2 lg:px-5 py-1.5 transition-all duration-200 hover:saturate-150">
              Inscription
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Mobile menu button -->
      <div @click="toggleMobileMenu" class="absolute top-0 end-0 flex sm:hidden m-3 w-10 h-10 justify-center items-center z-50">
        <transition name="icon-fade" mode="out-in">
          <font-awesome-icon :key="isMobileMenuOpen" :icon="isMobileMenuOpen ? ['fas', 'x'] : ['fas', 'bars']" size="xl" />
        </transition>
      </div>

      <!-- NavBar | Mobile -->
      <transition name="slide-down">
        <ul v-if="isMobileMenuOpen" class="fixed inset-0 overflow-y-auto w-screen h-screen bg-secondary flex flex-col p-12 pt-16 gap-8 font-finder text-xl z-40">
          <li class="delay-[200ms]">
            <RouterLink to="/" activeClass="bg-black" class="rounded-md px-5 py-1.5 hover:bg-black">
              Accueil
            </RouterLink>
          </li>
          <li class="delay-[220ms]">
            <RouterLink to="/a-propos" activeClass="bg-black" class="rounded-md px-5 py-1.5 hover:bg-black">
              Viking!<span class="text-red">Cup</span>
            </RouterLink>
          </li>
          <li class="delay-[240ms]">
            <RouterLink to="/regles" activeClass="bg-black" class="rounded-md px-5 py-1.5 hover:bg-black">
              Règles
            </RouterLink>
          </li>
          <li class="delay-[260ms]">
            <RouterLink to="/participer" activeClass="bg-black" class="rounded-md px-5 py-1.5 hover:bg-black">
              Comment participer
            </RouterLink>
          </li>
          <li class="delay-[280ms]">
            <RouterLink to="/sponsors" activeClass="bg-black" class="rounded-md px-5 py-1.5 hover:bg-black">
              Sponsors
            </RouterLink>
          </li>
          <li class="delay-[300ms]">
            <RouterLink to="/inscription" class="font-bold bg-red rounded-md px-5 py-1.5 transition-all duration-200 hover:saturate-150">
              Inscription
            </RouterLink>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<style scoped>
.icon-fade-enter-active, .icon-fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.icon-fade-enter, .icon-fade-leave-to {
  opacity: 0;
}


.slide-down-enter-active, .slide-down-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-down-enter-from, .slide-down-leave-to {
  transform: translateY(-100%);
}

.slide-down-enter-to, .slide-down-leave-from {
  transform: translateY(0);
}


.slide-down-enter-active li, .slide-down-leave-active li {
  transition: opacity 1s ease-in-out;
}

.slide-down-enter-from li, .slide-down-leave-to li {
  opacity: 0;
}

.slide-down-enter-to li, .slide-down-leave-from li {
  opacity: 1;
}
</style>

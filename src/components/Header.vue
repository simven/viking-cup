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
  <header class="fixed w-screen top-0 right-0 left-0 inset-0 z-30 bg-secondary shadow-md h-16 sm:h-24">
    <nav class="px-3 lg:px-6 h-full">
      <div class="flex justify-between items-center h-full">
        <!-- Logo -->
        <div class="z-40">
          <RouterLink to="/"><img alt="Viking Cup" src="/img/vk-cup.webp" class="w-14 sm:w-20" width="80" height="80" /></RouterLink>
        </div>

        <div class="flex sm:hidden items-center justify-center absolute inset-0 z-30">
          <RouterLink
            to="/billetterie"
            class="font-finder text-sm bg-red rounded-md px-3 py-2 text-md transition-all duration-200 hover:saturate-150">
            BILLETTERIE
          </RouterLink>
        </div>

        <!-- NavBar | Desktop -->
        <ul class="hidden sm:flex flex-row items-center text-center p-2.5 gap-2 md:gap-3">
          <li class="hidden lg:block">
            <RouterLink to="/" activeClass="bg-primary" class="rounded-md px-1 md:px-1.5 lg:px-4 py-1.5 transition-all duration-200 ease-in-out hover:bg-primary">
              Accueil
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/a-propos" activeClass="bg-primary" class="rounded-md px-1 md:px-1.5 lg:px-4 py-1.5 transition-all duration-200 ease-in-out hover:bg-primary">
              Viking!Cup
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/regles" activeClass="bg-primary" class="rounded-md px-1 md:px-1.5 lg:px-4 py-1.5 transition-all duration-200 ease-in-out hover:bg-primary">
              Règles
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/participer" activeClass="bg-primary" class="whitespace-nowrap rounded-md px-1 md:px-1.5 lg:px-4 py-1.5 transition-all duration-200 ease-in-out hover:bg-primary">
              Comment participer
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/sponsors" activeClass="bg-primary" class="rounded-md px-1 md:px-1.5 lg:px-4 py-1.5 transition-all duration-200 ease-in-out hover:bg-primary">
              Sponsors
            </RouterLink>
          </li>
          <li class="flex flex-wrap gap-2 md:gap-3 w-fit justify-center">
            <RouterLink to="/inscription" active-class="brightness-100" class="font-bold bg-black rounded-md px-1 md:px-1.5 lg:px-4 py-1.5 transition-all duration-300 hover:bg-white hover:text-black">
              Inscription
            </RouterLink>
            <RouterLink to="/billetterie" class="font-bold bg-red rounded-md px-1 md:px-1.5 lg:px-4 py-1.5 transition-all duration-200 hover:saturate-150">
              Billetterie
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
            <RouterLink to="/" activeClass="bg-primary" class="rounded-md px-5 py-1.5 hover:bg-primary">
              Accueil
            </RouterLink>
          </li>
          <li class="delay-[220ms]">
            <RouterLink to="/a-propos" activeClass="bg-primary" class="rounded-md px-5 py-1.5 hover:bg-primary">
              Viking!Cup
            </RouterLink>
          </li>
          <li class="delay-[240ms]">
            <RouterLink to="/regles" activeClass="bg-primary" class="rounded-md px-5 py-1.5 hover:bg-primary">
              Règles
            </RouterLink>
          </li>
          <li class="delay-[260ms]">
            <RouterLink to="/participer" activeClass="bg-primary" class="rounded-md px-5 py-1.5 hover:bg-primary">
              Comment participer
            </RouterLink>
          </li>
          <li class="delay-[280ms]">
            <RouterLink to="/sponsors" activeClass="bg-primary" class="rounded-md px-5 py-1.5 hover:bg-primary">
              Sponsors
            </RouterLink>
          </li>
          <li class="delay-[300ms]">
            <RouterLink to="/inscription" class="font-bold bg-black rounded-md px-5 py-1.5 transition-all duration-200">
              Inscription
            </RouterLink>
          </li>
          <li class="delay-[300ms]">
            <RouterLink to="/billetterie" class="font-bold bg-red rounded-md px-5 py-1.5 transition-all duration-200 hover:saturate-150">
              Billetterie
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

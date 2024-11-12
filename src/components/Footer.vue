<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer id="footer" class="relative w-full bg-secondary">
    <div class="grid footer-items gap-4 w-11/12	md:w-10/12 mx-auto pt-20 pb-10">
      <ul class="flex flex-col p-2.5 gap-3 col-span-8 sm:col-span-4 md:col-span-2">
        <li>
          <h2>Menu</h2>
        </li>
        <li>
          <RouterLink to="/" class="transition-all duration-300 ease-in-out hover:text-red">
            Accueil
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/a-propos" class="transition-all duration-300 ease-in-out hover:text-red">
            Viking!<span class="text-red">Cup</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/regles" class="transition-all duration-300 ease-in-out hover:text-red">
            Règles
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/participer" class="transition-all duration-300 ease-in-out hover:text-red">
            Comment participer
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/sponsors" class="transition-all duration-300 ease-in-out hover:text-red">
            Sponsors
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/inscription" class="transition-all duration-300 ease-in-out hover:text-red">
            Inscription
          </RouterLink>
        </li>
        <li>
          <div class="transition-all duration-300 ease-in-out hover:text-red">
            Mentions légales
          </div>
        </li>
      </ul>

      <ul class="flex flex-col p-2.5 gap-3 col-span-8 sm:col-span-4 md:col-span-2">
        <li>
          <h2>NOUS AUSSI</h2>
        </li>
        <li>
          <a href="https://www.normandie-racing.fr" target="_blank" class="flex items-center hover:text-red">
            <img src="/img/nr.png" alt="Normandie Racing" class="w-10 h-10" />
            <span class="pl-2">Normandie Racing</span>
          </a>
        </li>
        <li>
          <div class="flex items-center">
            <img src="/img/v-cup.png" alt="Viking!Cup" class="w-10 h-10" />
            <span class="pl-2">Viking!Cup</span>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <img src="/img/v-drinks.png" alt="Viking!Drinks" class="w-10 h-10" />
            <span class="pl-2">Viking!Drinks</span>
          </div>
        </li>
      </ul>

      <ul class="flex flex-col p-2.5 gap-3 col-span-8 sm:col-span-4 md:col-span-2">
        <li>
          <h2>Suivez-nous</h2>
        </li>
        <li class="flex gap-3">
          <a
            href="https://www.facebook.com/driftnormand"
            target="_blank">
            <font-awesome-icon class="hover:text-red transition-all duration-300 ease-in-out" :icon="['fab', 'square-facebook']" size="2xl" />
          </a>

          <a
            href="https://www.instagram.com/normandie.racing"
            target="_blank">
            <font-awesome-icon class="hover:text-red transition-all duration-300 ease-in-out" :icon="['fab', 'square-instagram']" size="2xl" />
          </a>

          <a
            href="https://www.youtube.com/@normandieracing9167"
            target="_blank">
            <font-awesome-icon class="hover:text-red transition-all duration-300 ease-in-out" :icon="['fab', 'square-youtube']" size="2xl" />
          </a>

          <a
            href="https://www.tiktok.com/@normandie.racing"
            target="_blank"
            class="flex items-center">
            <div class="flex justify-center items-center rounded-md bg-white hover:bg-red w-[28px] h-[29px]">
              <font-awesome-icon class="text-secondary transition-all duration-300 ease-in-out" :icon="['fab', 'tiktok']" size="lg" />
            </div>
          </a>
        </li>
      </ul>

      <ul class="flex flex-col p-2.5 gap-3 col-span-8 sm:col-span-4 md:col-span-2">
        <li>
          <h2>Contact</h2>
        </li>
        <li>
          <a href="mailto:vikingcup14@gmail.com" class="flex items-center gap-3 hover:text-red">
            <font-awesome-icon class="" :icon="['fas', 'envelope']" size="lg" />
            vikingcup14@gmail.com
          </a>
        </li>
      </ul>
    </div>

    <div class="flex border-t border-primary">
      <div class="w-11/12	md:w-10/12 mx-auto py-4 flex flex-col justify-center text-center">
        <h3>VIKING!<span class="text-red">CUP</span> by normandie racing</h3>
        <p class="text-xs">© {{ currentYear }} Simon Vennat • Normandie Racing</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-items {
  grid-template-columns: repeat(8, minmax(0, 1fr));
}
</style>

<script setup lang="ts">
import Title from '@/components/Title.vue'
</script>

<template>
  <div class="flex flex-col justify-center items-center pt-6 sm:pt-14 max-w-5xl m-auto px-10">
    <Title>
      <template #title>
        <span class="whitespace-nowrap">Viking!<span class="text-red">Cup</span> ?</span>
      </template>
    </Title>

    <p class="my-8 text-center">La Viking!Cup, c'est <span class="text-red font-bold">bien plus</span> qu'une simple compétition de drift.</p>

    <div class="max-w-3xl">
      <img class="rounded-xl" alt="Viking Cup E30" src="/img/e30.jpg" loading="lazy" />
    </div>

    <div class="flex flex-col items-center mt-12 md:mt-16">
      <Title>
        <template #title>
          Qu'est ce que <span class="whitespace-nowrap">c'est ?</span>
        </template>
      </Title>

      <div class="mt-10 md:mt-14">
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at sodales lacus. Sed lacinia nulla turpis, vel aliquet tellus ornare a. Donec pretium ligula mi, blandit gravida risus fermentum vel. Fusce urna arcu, accumsan vel vestibulum eu, laoreet sed erat. Sed pulvinar, nisl ac malesuada maximus, purus nisl facilisis tellus, a efficitur risus ipsum nec libero. Vivamus scelerisque diam nec magna dictum, eget aliquet nisi dapibus. Maecenas imperdiet mauris vitae diam interdum elementum. Praesent efficitur bibendum mauris non ullamcorper.</p>
        </div>

        <div class="grid grid-cols-4 w-full mt-10 md:mt-14">
          <div class="flex justify-center col-span-2">
            <a href="https://www.normandie-racing.fr" target="_blank">
              <img alt="Normandie Racing" src="/img/nr.png" />
            </a>
          </div>

          <div class="flex justify-center col-span-2">
            <img alt="Viking! Drinks" src="/img/vk-drinks.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

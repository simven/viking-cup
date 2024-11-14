<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useCountdownStore } from '@/stores/useCountdownStore';

const countdownStore = useCountdownStore();
const { countdown, startCountdown, stopCountdown } = countdownStore;

onMounted(() => {
  startCountdown('2025-02-15T09:00:00');
});

onUnmounted(() => {
  stopCountdown();
});
</script>

<template>
  <div class="bg-secondary rounded-xl">
    <div class="px-4 md:px-6 lg:px-10 py-3 flex flex-row gap-4 md:gap-8 text-center">

      <div class="flex flex-col items-center gap-2">
        <div class="flex gap-1 md:gap-2">
          <span class="bg-black rounded-md px-2 py-1 w-7 md:w-8 text-lg md:text-2xl font-bold">{{ countdown.days.toString().padStart(2, '0').at(0) }}</span>
          <span class="bg-black rounded-md px-2 py-1 w-7 md:w-8 text-lg md:text-2xl font-bold">{{ countdown.days.toString().padStart(2, '0').at(1) }}</span>
        </div>

        <h3 class="uppercase text-xs md:text-sm">jours</h3>
      </div>

      <div class="flex flex-col items-center gap-2">
        <div class="flex gap-1 md:gap-2">
          <span class="bg-black rounded-md px-2 py-1 w-7 md:w-8 text-lg md:text-2xl font-bold">{{ countdown.hours.toString().padStart(2, '0').at(0) }}</span>
          <span class="bg-black rounded-md px-2 py-1 w-7 md:w-8 text-lg md:text-2xl font-bold">{{ countdown.hours.toString().padStart(2, '0').at(1) }}</span>
        </div>

        <h3 class="uppercase text-xs md:text-sm">heures</h3>
      </div>

      <div class="flex flex-col items-center gap-2">
        <div class="flex gap-1 md:gap-2">
          <span class="bg-black rounded-md px-2 py-1 w-7 md:w-8 text-lg md:text-2xl font-bold">{{ countdown.minutes.toString().padStart(2, '0').at(0) }}</span>
          <span class="bg-black rounded-md px-2 py-1 w-7 md:w-8 text-lg md:text-2xl font-bold">{{ countdown.minutes.toString().padStart(2, '0').at(1) }}</span>
        </div>

        <h3 class="uppercase text-xs md:text-sm">minutes</h3>
      </div>

      <div class="flex flex-col items-center gap-2">
        <div class="flex gap-1 md:gap-2">
          <span class="bg-black rounded-md px-2 py-1 w-7 md:w-8 text-lg md:text-2xl font-bold">{{ countdown.seconds.toString().padStart(2, '0').at(0) }}</span>
          <span class="bg-black rounded-md px-2 py-1 w-7 md:w-8 text-lg md:text-2xl font-bold">{{ countdown.seconds.toString().padStart(2, '0').at(1) }}</span>
        </div>

        <h3 class="uppercase text-xs md:text-sm">secondes</h3>
      </div>

    </div>
  </div>
</template>

<style scoped>
</style>

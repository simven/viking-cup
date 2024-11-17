<script setup lang="ts">
import Title from '@/components/Title.vue'
import { ref } from 'vue'
import SponsorModal from '@/components/SponsorModal.vue'

export interface SponsorLink {
  icon: string[]
  url: string
}

const sponsors = ref<{ name: string, desc: string, src: string, alt: string, links: SponsorLink[] }[]>([
  { name: 'Normandie Racing', desc: 'Association Sport Mécanique', src: '/img/nr.webp', alt: 'NR', links: [{ icon: ['fa', 'link'], url: 'https://www.normandie-racing.fr' }, { icon: ['fab', 'facebook-f'], url: 'https://www.facebook.com/normandieracing' }] },
]);
const showModal = ref<boolean>(false);
const selectedSponsor = ref<{ name: string, desc: string, src: string, alt: string, links: SponsorLink[] }|null>(null);

function openModal(sponsor: { name: string, desc: string, src: string, alt: string, links: SponsorLink[] }) {
  selectedSponsor.value = sponsor
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}
</script>

<template>
  <div class="flex flex-col justify-center items-center py-32 sm:py-40 max-w-7xl m-auto px-10 gap-10 md:gap-14 lg:gap-20">
    <Title>
      <template #title>NOS SPONSORS</template>
    </Title>

    <div class="grid grid-cols-4 gap-6 md:gap-10 w-full">
      <div
        @click="openModal(sponsor)"
        v-for="(sponsor, index) in sponsors"
        :key="index"
        class="col-span-4 md:col-span-2 2xl:col-span-1 bg-primary-light hover:bg-white rounded-xl backdrop-blur-md cursor-pointer transition-all duration-300 ease-in-out hover:saturate-150 hover:-translate-y-1">

        <div class="flex justify-center items-center p-2">
          <img :src="sponsor.src" :alt="sponsor.alt" class="w-40 h-40" />
        </div>

      </div>
    </div>

    <!-- Modal -->
    <SponsorModal @close="closeModal" :is-modal-open="showModal" :sponsor="selectedSponsor" />
  </div>
</template>

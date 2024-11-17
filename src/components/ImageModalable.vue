<script setup lang="ts">
import { defineProps } from 'vue'
import { ref } from 'vue';
import ImageModal from '@/components/ImageModal.vue'

// Props
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: 'Image',
  },
  imgClass: {
    type: String,
  },
  width: {
    type: String,
    default: 'auto',
  },
  height: {
    type: String,
    default: 'auto',
  }
});

// Variables réactives
const isModalOpen = ref(false);

// Méthodes
const openModal = () => {
  isModalOpen.value = true;
};
</script>

<template>
  <div>
    <!-- Image cliquable -->
    <img
      @click="openModal"
      :src="src"
      :alt="alt"
      :class="imgClass"
      loading="lazy"
      :width="width"
      :height="height" />

    <!-- Modal -->
    <ImageModal :src="src" :is-modal-open="isModalOpen" @close="isModalOpen = false" />
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isAboveFooter = ref(false);
const button = ref(null);

function checkFooterPosition() {
  const footer = document.getElementById('footer');

  if (footer && button.value) {
    const footerRect = footer.getBoundingClientRect();
    const buttonRect = button.value.getBoundingClientRect();

    isAboveFooter.value = buttonRect.bottom > footerRect.top;
  }
}

onMounted(() => {
  window.addEventListener('scroll', checkFooterPosition);
  checkFooterPosition();
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkFooterPosition);
});
</script>

<template>
  <div ref="button" class="fixed bottom-0 py-8 z-50">
    <transition name="fade">
      <RouterLink
        to="/inscription"
        class="font-finder bg-red rounded-md px-4 py-3 text-md transition-all duration-200 hover:saturate-150"
        :class="isAboveFooter ? 'opacity-0' : 'opacity-50 hover:opacity-100'">
        S'INSCRIRE
      </RouterLink>
    </transition>
  </div>
</template>

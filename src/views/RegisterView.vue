<script setup lang="ts">
import Title from '@/components/Title.vue'
import { toast } from 'vue3-toastify'
import { computed, ref } from 'vue'
import { useDateStore } from '@/stores/useDateStore'
import 'vue3-toastify/dist/index.css';

const dateStore = useDateStore();
const { formatDate } = dateStore;

const showWarningRules = ref(false);
const handleInputRulesClick = () => {
  showWarningRules.value = !rulesChecked.value;
};

const loading = ref(false);
const rulesChecked = ref(false);
const greatPriceDeadline = new Date('2024-12-31T23:59:59');
const isDeadlinePassed = computed(() => new Date() > greatPriceDeadline);

const childOptions = ref([
  { label: "Le 15 et 16 février → 370 €", value: "Le 15/16 Février     370€     payé 45 jours avant", checked: false, amount: 370 },
  { label: "Le 17 et 18 mai → 370 €", value: "Le 17/18 Mai          370€      payé 45 jours avant", checked: false, amount: 370 },
  { label: "Le 13 et 14 septembre → 370 €", value: "13/14 Septembre  370€      payé 45 jours avant", checked: false, amount: 370 },
]);

const parentChecked = computed(() => childOptions.value.every(option => option.checked));

const isIndeterminate = computed(() => {
  const checkedCount = childOptions.value.filter(option => option.checked).length;
  return checkedCount > 0 && checkedCount < childOptions.value.length;
});

const greatPrice = computed(() => {
  if (!isDeadlinePassed.value && parentChecked.value) {
    return 1000;
  }

  return 0;
});

const totalAmount = computed(() => {
  return childOptions.value
    .filter(option => option.checked)
    .reduce((sum, option) => sum + option.amount, 0);
});

const toggleParent = () => {
  const newChecked = !parentChecked.value;
  childOptions.value.forEach(option => {
    option.checked = newChecked;
  });
};

const submitForm = () => {
  loading.value = true;
  const form: HTMLFormElement = document.getElementById('registerForm') as HTMLFormElement;
  const formData = new FormData(form);

  fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSeK5YMASGTT0AmV-SqYmO7yps6g13XKkB42OwjGtEOyTakmAA/formResponse', {
    method: 'POST',
    body: formData,
    mode: 'no-cors',
  })
    .then(() => {
      loading.value = false;
      toast.success('Pré-inscription envoyée avec succès');
    })
    .catch((error) => {
      loading.value = false;
      toast.success('Erreur lors de la soumission du formulaire');
      console.error(error);
    });
}

const checkRules = () => {
  rulesChecked.value = true;
}
</script>

<template>
  <div class="flex flex-col justify-center items-center pt-32 sm:pt-40 max-w-7xl m-auto px-10 gap-10 md:gap-14 lg:gap-20">
    <Title>
      <template #title>
        Formulaire de pré-inscription
      </template>
    </Title>

    <form id="registerForm" class="w-full max-w-5xl flex flex-col items-center justify-center" @submit.prevent="submitForm">
      <div class="w-full flex flex-col gap-10">
        <div class="flex flex-col md:flex-row md:justify-between gap-6 md:gap-10">
          <div class="flex flex-col justify-center items-center w-full max-w-sm">
            <div class="mb-5 w-full">
              <input type="text" name="entry.1404885967" class="rounded-md w-full p-2.5 bg-primary-light outline-none" placeholder="Nom - Prénom" required>
            </div>
            <div class="mb-5 w-full">
              <input type="email" name="entry.1560793073" class="rounded-md w-full p-2.5 bg-primary-light outline-none" placeholder="Adresse mail" required>
            </div>
            <div class="mb-5 w-full">
              <input type="text" name="entry.1952278024" class="rounded-md w-full p-2.5 bg-primary-light outline-none" placeholder="Adresse postale" required>
            </div>
            <div class="w-full">
              <input type="tel" name="entry.149109073" class="rounded-md w-full p-2.5 bg-primary-light outline-none" placeholder="Téléphone" required>
            </div>
          </div>

          <div class="flex flex-col justify-center gap-7">
            <fieldset class="flex flex-col gap-4">
              <template v-if="isDeadlinePassed">
                <label>
                  <input
                    type="checkbox"
                    class="mr-2 accent-red"
                    :indeterminate="isIndeterminate"
                    :checked="parentChecked"
                    @change="toggleParent" />
                  Les 3 dates → 1100 €
                </label>
              </template>
              <template v-else>
                <label>
                  <input
                    type="checkbox"
                    name="entry.438622691"
                    value="Les 3 dates soit 1000€ payé avant le 31 décembre 2024"
                    class="mr-2 accent-red"
                    :indeterminate="isIndeterminate"
                    :checked="parentChecked"
                    @change="toggleParent" />
                  Les 3 dates → 1000 € <span class="line-through text-sm">1100 €</span>  avant le 31 décembre 2024
                </label>
              </template>

              <label v-for="(option, index) in childOptions" :key="index">
                <input
                  type="checkbox"
                  name="entry.438622691"
                  class="mr-2 accent-red"
                  :value="option.value"
                  v-model="childOptions[index].checked" />
                {{ option.label }}
              </label>
            </fieldset>

            <div class="flex gap-4">
              <label class="whitespace-nowrap"><input type="radio" name="entry.487361973" value="AMATEUR" class="mr-2 accent-red" required />LOISIR</label>
              <label class="whitespace-nowrap"><input type="radio" name="entry.487361973" value="SEMI PRO" class="mr-2 accent-red" required />SEMI-PRO</label>
            </div>
          </div>
        </div>

        <div>
          <label @click="handleInputRulesClick">
            <input :disabled="!rulesChecked" type="checkbox" name="entry.1960960414" value="J'atteste sur l'honneur avoir pris en compte le réglement et me mettre moi et mon véhicule en accord avec celui-ci" class="mr-2 accent-red" required>
            J'atteste sur l'honneur avoir pris en compte le <a @click="checkRules" href="/viking-cup-rules.pdf" target="_blank" class="text-red underline">règlement</a> et me mettre moi et mon véhicule en accord avec celui-ci.
          </label>
          <p v-if="showWarningRules" class="text-sm text-red">Veuillez consulter le règlement pour continuer</p>
        </div>

        <transition name="fade" mode="out-in">
          <p v-if="greatPrice">
            Montant à payer avant le <span class="font-bold underline">{{ formatDate(greatPriceDeadline) }}</span> pour valider l'inscription :
            <span class="font-finder text-red text-2xl">{{greatPrice}} €</span> <span class="line-through text-sm">{{ totalAmount }} €</span>
          </p>

          <p v-else-if="totalAmount">
            Montant à payer <span class="font-bold underline">45 jours avant l'événement</span> pour valider l'inscription :
            <span class="font-finder text-red text-2xl">{{totalAmount}} €</span>
          </p>
        </transition>
      </div>

      <div class="mt-7">
        <button
          :disabled="loading"
          :class="{ 'opacity-40': loading }"
          class="font-finder bg-red rounded-md px-5 py-1.5 transition-all duration-200 hover:saturate-150"
          type="submit">
          S'inscrire
        </button>
      </div>
    </form>

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

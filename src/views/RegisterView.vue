<script setup lang="ts">
import Title from '@/components/Title.vue'
import { toast } from 'vue3-toastify'

const submitForm = () => {
  const form: HTMLFormElement = document.getElementById('registerForm') as HTMLFormElement;
  const formData = new FormData(form);

  fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSeK5YMASGTT0AmV-SqYmO7yps6g13XKkB42OwjGtEOyTakmAA/formResponse', {
    method: 'POST',
    body: formData,
    mode: 'no-cors',
  })
    .then(() => {
      toast.success('Pré-inscription envoyée avec succès');
    })
    .catch((error) => {
      toast.success('Erreur lors de la soumission du formulaire');
      console.error(error);
    });
}
</script>

<template>
  <div class="flex flex-col justify-center items-center pt-6 sm:pt-14 max-w-5xl m-auto px-10 gap-10 md:gap-14 lg:gap-20">
    <Title>
      <template #title>
        Formulaire de pré-inscription
      </template>
    </Title>

    <form id="registerForm" class="w-full flex flex-col items-center text-black" @submit.prevent="submitForm">
      <div class="grid grid-cols-2 gap-6">

        <div class="col-span-2 md:col-span-1">
          <div class="mb-5 w-full">
            <input type="text" name="entry.1404885967" class="rounded-md w-full p-2.5 bg-border-primary focus:text-border-primary focus:bg-text-primary" placeholder="Nom - Prénom" required>
          </div>
          <div class="mb-5 w-full">
            <input type="email" name="entry.1560793073" class="rounded-md w-full p-2.5 bg-border-primary focus:text-border-primary focus:bg-text-primary" placeholder="Adresse mail" required>
          </div>
          <div class="mb-5 w-full">
            <input type="text" name="entry.1952278024" class="rounded-md w-full p-2.5 bg-border-primary focus:text-border-primary focus:bg-text-primary" placeholder="Adresse" required>
          </div>
          <div class="mb-5 w-full">
            <input type="tel" name="entry.149109073" class="rounded-md w-full p-2.5 bg-border-primary focus:text-border-primary focus:bg-text-primary" placeholder="Téléphone" required>
          </div>
        </div>

        <div class="col-span-2 md:col-span-1">
          <div class="flex flex-col gap-2">
            <label><input type="checkbox" name="entry.438622691" value="Les 3 dates soit 1000€ payé avant le 31 décembre 2024" class="mr-2">Les 3 dates soit 1000€ payé avant le 31 décembre 2024</label>
            <label><input type="checkbox" name="entry.438622691" value="Le 15/16 Février     370€     payé 45 jours avant" class="mr-2">Le 15/16 février 370€ payé 45 jours avant</label>
            <label><input type="checkbox" name="entry.438622691" value="Le 17/18 Mai          370€      payé 45 jours avant" class="mr-2">Le 17/18 mai 370€ payé 45 jours avant</label>
            <label><input type="checkbox" name="entry.438622691" value="13/14 Septembre  370€      payé 45 jours avant" class="mr-2">Le 13/14 septembre 370€ payé 45 jours avant</label>
          </div>

          <div class="flex gap-4 mt-5">
            <label><input type="radio" name="entry.487361973" value="AMATEUR" class="mr-2">LOISIR</label>
            <label><input type="radio" name="entry.487361973" value="SEMI PRO" class="mr-2">SEMI-PRO</label>
          </div>
        </div>
      </div>

      <label>
        <input type="checkbox" name="entry.1960960414" value="J'atteste sur l'honneur avoir pris en compte le réglement et me mettre moi et mon véhicule en accord avec celui-ci" class="mr-2" required>
        J'atteste avoir lu et approuvé le règlement.
      </label>


      <button class="font-finder bg-red rounded-md px-1 md:px-2 lg:px-5 py-1.5 transition-all duration-200 hover:saturate-150" type="submit">
        S'inscrire
      </button>
    </form>

  </div>
</template>

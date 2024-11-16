<script setup lang="ts">
import Title from '@/components/Title.vue'
import TitleSecondary from '@/components/TitleSecondary.vue'
import ImageModalable from '@/components/ImageModalable.vue'
</script>

<template>
  <div class="flex flex-col justify-center items-center py-32 sm:py-40 max-w-7xl m-auto px-10">
    <Title>
      <template #title>
        <span class="whitespace-nowrap">Viking!<span class="text-red">Cup</span> ?</span>
      </template>
    </Title>


    <div class="flex flex-col mt-12 md:mt-20 gap-12 md:gap-20">
      <div class="max-w-3xl mx-auto">
        <ImageModalable
          :img-class="'cursor-pointer rounded-xl w-[770px]'"
          :src="'/img/e30.webp'"
          :alt="'Viking Cup E30'"
          :width="'770'"
          :height="'400'" />
      </div>

      <div class="flex flex-col items-center">
        <TitleSecondary>
          <template #title>
            Qu'est ce que <span class="whitespace-nowrap">c'est ?</span>
          </template>
        </TitleSecondary>

        <div class="mt-10 md:mt-14">
          <h3 class="text-center">VOTRE sécurité est NOTRE sérénité</h3>

          <section class="mt-8">
            <p>Toujours fidèles à nos valeurs, nous nous engageons à vous proposer des événements de qualité.</p>

            <p>Le staff de la Viking!<span class="text-red">Cup</span> travaille d’arrache-pied depuis un certain temps, et nous avons enfin le plaisir de vous annoncer une grande nouvelle !</p>

            <div class="flex justify-center">
              <p class="p-4 font-bold my-4 rounded-r-xl bg-primary-light border-l-4 border-red w-fit">Le Championnat de la Viking!<span class="text-red font-bold">Cup</span> devient un championnat FFSA inscrit au calendrier FFSA !</p>
            </div>

            <p>
              Nous avons également le soutien précieux du Championnat de France de Drift, qui nous accompagne
              dans nos démarches pour officialiser notre statut de championnat. Un grand merci à eux pour leur aide
              et leur soutien dans ce projet ambitieux !
            </p>

            <p>
              Nous tenons également à remercier chaleureusement l’ASA du Pays de Dieppe, qui nous aide à rendre
              possible l’organisation administrative de cet événement.
            </p>
          </section>

          <section class="mt-8">
            <h4>Ce que cela nous apporte d’être FFSA :</h4>
            <ul class="list-disc ml-3 md:ml-6">
              <li>
                Un classement annuel avec un titre de champion pour les vainqueurs des catégories Loisir et Semi-Pro.
              </li>
              <li>
                Le vainqueur de la catégorie Semi-Pro gagnera sa place en catégorie Pro au CFD en 2026.
              </li>
              <li>
                Le vainqueur de la catégorie Loisir gagnera sa place en catégorie Semi-Pro à la Viking!<span class="text-red">Cup</span> en 2026.
              </li>
            </ul>
          </section>

          <section class="mt-8">
            <h4>Ce que cela implique :</h4>

            <div class="ml-3 md:ml-6">
              <ul class="list-disc">
                <li>
                  Nous serons intransigeants sur la réglementation des véhicules (voir annexe J FIA 2024).
                </li>
                <li>
                  Nous serons intransigeants sur la réglementation de l’équipement pilote.
                </li>
                <li>
                  Vous devrez obligatoirement être licencié de la FFSA (environ 180 € par an) ou souscrire un titre
                  de participation à chaque épreuve (44 € par épreuve). Bien que cela représente un coût supplémentaire,
                  il s'agit également d'une couverture importante pour vous, pilotes.
                </li>
              </ul>

              <p class="mt-5">Les règles techniques des véhicules restent inchangées pour les catégories Loisir et Semi-Pro.</p>
            </div>
          </section>
        </div>
      </div>
    </div>


    <div class="grid grid-cols-4 w-full mt-10 md:mt-14">
      <div class="flex justify-center col-span-2">
        <a href="https://www.normandie-racing.fr" target="_blank">
          <img alt="Site Normandie Racing" src="/img/nr.webp" width="150" height="150" />
        </a>
      </div>

      <div class="flex justify-center col-span-2">
        <img alt="Site Viking! Drinks" src="/img/vk-drinks.webp" width="150" height="150" />
      </div>
    </div>
  </div>
</template>

<style scoped>
li {
  font-size: clamp(1rem, .8rem + .4vw, 1.2rem);
  line-height: 160%;
}
</style>

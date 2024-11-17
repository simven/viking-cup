<script setup lang="ts">
import Title from '@/components/Title.vue'
</script>

<template>
  <div class="flex flex-col justify-center items-center py-32 sm:py-40 max-w-7xl m-auto px-10">
    <Title>
      <template #title>
        Règlement Technique
      </template>
    </Title>


    <div class="mt-12 md:mt-20 flex flex-col gap-14 md:gap-20">
      <div class="flex justify-center sm:justify-end">
        <a
          href="/viking-cup-rules.pdf"
          target="_blank"
          title="Télécharger le règlement technique"
          class="bg-red rounded-md transition-all duration-200 hover:saturate-150 px-6 py-1">
            <font-awesome-icon :icon="['fa', 'download']" />
        </a>
      </div>

      <section>
        <h2 class="mb-2">1. Véhicules</h2>

        <div class="ml-3 md:ml-6 mt-3">
          <p>Les véhicules participant à la Viking Cup doivent respecter les conditions suivantes :</p>

          <ul class="list-disc ml-3 md:ml-6 mt-3">
            <li>Contrôles techniques obligatoires avant chaque compétition.</li>
            <li>Catégories de véhicules : Loisir et Semi-Pro.</li>
            <li>Autorisation : propulsion arrière ou 4 roues motrices converties en propulsion arrière.</li>
            <li>Interdictions : traction avant convertie, châssis tubulaires.</li>
            <li>Carrosserie en bon état avec peinture récente obligatoire.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 class="mb-2">2. Catégories</h2>

        <div class="ml-4 md:ml-10 mt-3">
          <div class="mb-3">
            <h3>Loisir</h3>

            <ul class="list-disc ml-5 md:ml-8">
              <li>Puissance recommandée : 150 à 300 chevaux.</li>
              <li>Véhicules de série à propulsion arrière uniquement.</li>
              <li>Idéal pour découvrir la compétition.</li>
            </ul>
          </div>

          <div>
            <h3>Semi-Pro</h3>

            <div class="ml-3 md:ml-6 mt-3">
              <p>
                La catégorie Semi-Pro est conçue comme une catégorie promotionnelle pour les pilotes souhaitant
                améliorer leurs compétences avec des véhicules modifiés mais encadrés par des limitations techniques.
              </p>

              <div class="mt-3">
                <h4>1. Moteur</h4>
                <ul class="list-disc ml-3 md:ml-6 mt-1.5">
                <li>
                  Tous types de moteurs autorisés, dérivés de véhicules de série ayant une production minimale de
                  1 000 unités.
                </li>
                <li>Passage de l’aspiration naturelle à la suralimentation (turbo ou compresseur) autorisé.</li>
                <li>
                  Utilisation de composants renforcés : pistons, bielles et vilebrequins forgés, unités de commande
                  reprogrammables, systèmes d’échappement et d’admission modifiés.
                </li>
                <li>
                  Puissance recommandée : entre 300 et 450 chevaux. Pas de limitation maximale de puissance, mais
                  les pneus arrière limités à 235 mm influencent les performances optimales.
                </li>
                <li>Le protoxyde d'azote (NOS) est strictement interdit.</li>
              </ul>
              </div>

              <div class="mt-3">
                <h4>2. Transmission et Différentiel</h4>
                <ul class="list-disc ml-3 md:ml-6 mt-1.5">
                <li>
                  Boîtes de vitesses modifiées autorisées uniquement dans le carter d'origine, avec levier en H
                  (séquentielles interdites).
                </li>
                <li>Remplacement ou modification des différentiels autorisés, sauf pour des rapports de transmission rapide.</li>
                <li>L'essieu arrière doit rester fixé aux points d'origine du châssis.</li>
              </ul>
              </div>

              <div class="mt-3">
                <h4>3. Suspension et Direction</h4>
                <ul class="list-disc ml-3 md:ml-6 mt-1.5">
                <li>
                  Suspension modifiable, y compris bras ou triangles réglables, tant que la sécurité du véhicule n’est
                  pas compromise.
                </li>
                <li>
                  Barre anti-roulis et barres de renfort autorisées à l’avant et à l’arrière.
                </li>
                <li>
                  Modifications de la direction avec kits spécifiques autorisées pour améliorer l’angle de braquage.
                </li>
              </ul>
              </div>

              <div class="mt-3">
                <h4>4. Freins</h4>
                <ul class="list-disc ml-3 md:ml-6 mt-1.5">
                <li>
                  Freins en parfait état obligatoire. Systèmes hydrauliques pour le frein à main autorisés, mais doivent
                  fonctionner indépendamment ou en complément des systèmes standard.
                </li>
                <li>Remplacement des étriers et disques autorisé, ainsi que des tuyaux en métal.</li>
                <li>
                  Le frein à pied doit obligatoirement agir sur les quatre roues.
                </li>
              </ul>
              </div>

              <div class="mt-3">
                <h4>5. Pneus</h4>
                <ul class="list-disc ml-3 md:ml-6 mt-1.5">
                <li>Largeur maximale autorisée : 235 mm à l’arrière.</li>
                <li>
                  Pneus homologués pour usage routier uniquement. Pneus slicks strictement interdits.
                </li>
                <li>Aucune limitation sur le nombre de pneus utilisés par course.</li>
              </ul>
              </div>

              <div class="mt-3">
                <h4>6. Carrosserie</h4>
                <ul class="list-disc ml-3 md:ml-6 mt-1.5">
                  <li>
                    Carrosserie modifiable, tant que les lignes standard du véhicule sont respectées et qu’aucune
                    partie ne dépasse de 10 % les dimensions d’origine.
                  </li>
                  <li>Rétroviseurs extérieurs obligatoires avec bonne visibilité.</li>
                  <li>Les panneaux et fenêtres doivent être correctement fixés et en bon état.</li>
                </ul>
              </div>

              <div class="mt-3">
                <h4>7. Arceau de Sécurité</h4>
                <ul class="list-disc ml-3 md:ml-6 mt-1.5">
                  <li>
                    Arceau de sécurité de minimum 6 points obligatoire, conforme à l’article 253.8 de l’annexe J
                    de la FFSA.
                  </li>
                  <li>
                    Des exceptions peuvent être faites avec l’approbation du Délégué Technique de la FFSA.
                  </li>
                </ul>
              </div>

              <div class="mt-3">
                <h4>8. Extincteur</h4>
                <ul class="list-disc ml-3 md:ml-6 mt-1.5">
                  <li>Extincteur de 2 kg minimum obligatoire, solidement fixé et accessible au pilote.</li>
                  <li>Installation d’un système automatique recommandée mais non obligatoire.</li>
                </ul>
              </div>

              <div class="mt-3">
                <h4>9. Règles Additionnelles</h4>
                <ul class="list-disc ml-3 md:ml-6 mt-1.5">
                <li>Coupe-circuit accessible depuis l’intérieur et l’extérieur du véhicule.</li>
                <li>
                  Feux de position et de freinage obligatoires, y compris un feu de freinage supplémentaire type LED
                  visible à l’avant.
                </li>
                <li>Sièges baquets homologués FIA obligatoires (date d’expiration tolérée jusqu’à 3 ans).</li>
                <li>Ceintures de sécurité à 5 points homologuées FIA obligatoires.</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 class="mb-2">3. Protections Individuelles Obligatoires</h2>

        <div class="ml-3 md:ml-6 mt-3">
          <p>Les pilotes doivent porter :</p>

          <ul class="list-disc ml-3 md:ml-6 mt-3">
            <li>Casque intégral ou semi-intégral avec homologation FIA et système HANS (obligatoire en 2026).</li>
            <li>Combinaisons, gants, chaussures et sous-vêtements ignifugés homologués FIA.</li>
            <li>Chaussettes ignifugées selon la norme FIA 8856-2018.</li>
            <li>Système HANS conseillé en 2025, obligatoire en 2026.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 class="mb-2">4. Licences, Homologations et Assurances</h2>

        <div class="ml-4 md:ml-10 mt-3">
          <p>Les pilotes doivent respecter les réglementations approuvées par la FFSA, y compris les annexes spécifiques à chaque épreuve.</p>
        </div>
      </section>

      <section>
        <h2 class="mb-2">5. Lignes de Course, Limites et Lieux</h2>

        <div class="ml-3 md:ml-6 mt-3">
          <p>Les courses se déroulent sur différents types de circuits, tels que :</p>

          <ul class="list-disc ml-3 md:ml-6 mt-3">
            <li>Circuits de vitesse.</li>
            <li>Pistes de karting.</li>
            <li>Pistes temporaires (street tracks, parkings, etc.).</li>
            <li>Pistes de montagne (Touge), uniquement en montée.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 class="mb-2">6. Équipes et Paddocks</h2>

        <div class="ml-4 md:ml-10 mt-3">
          <ul class="list-disc">
            <li>Chaque équipe doit disposer d’un extincteur d’au moins 2 kg.</li>
            <li>Les véhicules doivent stationner dans des espaces désignés protégés par des bâches imperméables.</li>
            <li>Les paddocks doivent être propres, organisés, et respecter le fair-play.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 class="mb-2">7. Modifications</h2>

        <div class="ml-4 md:ml-10 mt-3">
          <ul class="list-disc">
            <li>Toute modification doit être approuvée par le comité d’organisation et la FFSA.</li>
            <li>En cas de litige, le comité décidera de l’interprétation correcte des règles.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 class="mb-2">8. Sanctions et Pénalités</h2>

        <div class="ml-3 md:ml-6 mt-3">
          <p>Les infractions aux règles techniques ou de comportement peuvent entraîner :</p>

          <ul class="list-disc ml-3 md:ml-6 mt-3">
            <li>Exclusion de la compétition.</li>
            <li>Interdiction de participation en cas de non-conformité technique.</li>
            <li>Sanctions pour des fuites de fluides, des systèmes non conformes ou des éléments détachés.</li>
          </ul>


          <div class="mt-5 mb-3">
            <h3>Systèmes Autorisés</h3>

            <ul class="list-disc ml-5 md:ml-8">
              <li>Systèmes d’échappement avec limite de bruit à 95 dB.</li>
              <li>Pneus homologués pour usage routier, semi-slicks autorisés.</li>
              <li>Adaptation moteur et modifications autorisées pour Semi-Pro.</li>
            </ul>
          </div>

          <div>
            <h3>Éléments Obligatoires</h3>

            <ul class="list-disc ml-5 md:ml-8">
              <li>Coupe-circuit accessible de l’intérieur et de l’extérieur du véhicule.</li>
              <li>Arceau de sécurité 6 points pour la catégorie Semi-Pro.</li>
              <li>Extincteur d’au moins 2 kg dans chaque véhicule.</li>
              <li>Feux de position et stop en parfait état.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
li {
  font-size: clamp(1rem, .8rem + .4vw, 1.2rem);
  line-height: 160%;
}
</style>

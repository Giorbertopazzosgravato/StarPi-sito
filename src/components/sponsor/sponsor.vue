<script setup>
import { ref } from "vue";
import Inserzione from "@/components/sponsor/InsersioneSponsor.vue";

const Collaboratori_Principali = ref([
  {titolo:"DEWESoft", descrizione:"idk man", imageURL:"/sponsor_page/dewe.png"  , categoria:"", riferimento:"https://dewesoft.com/it"},
  {titolo:"Nlcomp", descrizione:"", imageURL:"/sponsor_page/nlcomp.webp", categoria:"???", riferimento:"https://northernlightcomposites.com/"},
  {titolo:"Università di pisa", descrizione:"idk man", imageURL:"/sponsor_page/unipi.jpg", categoria:"PARTNER", riferimento:"https://www.unipi.it/"},
  {titolo:"CRM composti", descrizione:"idk man", imageURL:"/sponsor_page/CRMcomposti.png", categoria:"gold 3", riferimento:"https://crmcompositi.com/"},
  {titolo:"EUROAVIA Pisa", descrizione:"idk man", imageURL:"/sponsor_page/EUROAVIAPisa.png", categoria:"suca", riferimento:"https://pisa.euroavia.eu/"}
]);

const Collaboratori_Secondari = ref([
  {titolo:"AISLER", descrizione:"idk man", imageURL:"/sponsor_page/AISLER.png", categoria:"", riferimento:"https://aisler.net/it"},
  {titolo:"Ansys", descrizione:"idk man", imageURL:"/sponsor_page/Ansys.png", categoria:"", riferimento:"https://www.ansys.com/it-it"}
]);

const Collaboratori_Terzi = ref([
  {titolo:"BLUETTI", descrizione:"idk man", imageURL:"/sponsor_page/BLUETTI.png", categoria:"", riferimento:"https://it.bluettipower.eu/"}
]);
</script>

<template>
  <div class="page-container">
    <div class="header-logo-container">
      <img src="/public/sponsor_page/Sfondale.png" alt="logo" class="top-logo">
    </div>

    <hr class="separator">

    <section class="sponsor-section">
      <h1 class="separatore">Main Partners</h1>
      <div class="sponsor-grid">
        <div v-for="(Ente, index) in Collaboratori_Principali" :key="index" class="grid-item">
          <Inserzione
              :titolo="Ente.titolo"
              :descrizione="Ente.descrizione"
              :imageURL="Ente.imageURL"
              :categoria="Ente.categoria"
              :rifermento="Ente.riferimento"
          />
        </div>
      </div>
    </section>

    <section class="sponsor-section">
      <h1 class="separatore">Partners</h1>
      <div class="sponsor-grid">
        <div v-for="(Ente, index) in Collaboratori_Secondari" :key="index" class="grid-item">
          <Inserzione
              :titolo="Ente.titolo"
              :descrizione="Ente.descrizione"
              :imageURL="Ente.imageURL"
              :rifermento="Ente.riferimento"
          />
        </div>
      </div>
    </section>

    <section class="sponsor-section">
      <h1 class="separatore">In collaboration with</h1>
      <div class="sponsor-grid">
        <div v-for="(Ente, index) in Collaboratori_Terzi" :key="index" class="grid-item">
          <Inserzione
              :titolo="Ente.titolo"
              :descrizione="Ente.descrizione"
              :imageURL="Ente.imageURL"
              :rifermento="Ente.riferimento"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-container {
  background: linear-gradient(#29446E 0%, #152845 100%);
  min-height: 100vh;
  padding-bottom: 80px;
}

.header-logo-container {
  width: 100%;
}

.top-logo {
  width: 100%;
  height: auto;
  display: block;
}

.separator {
  width: 90%;
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  margin: 20px auto;
}

.sponsor-section {
  max-width: 1300px;
  margin: 40px auto;
  padding: 0 20px;
}

.separatore {
  color: #4CC9F0;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* IL CUORE DEL WALL: LA GRIGLIA */
.sponsor-grid {
  display: grid;
  /* Crea colonne da almeno 250px che si riempiono automaticamente */
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 25px;
  justify-content: center;
}

.grid-item {
  display: flex;
  justify-content: center;
}

/* Ottimizzazione Mobile */
@media (max-width: 600px) {
  .sponsor-grid {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); /* Card più piccole su mobile */
    gap: 15px;
  }
  
  .separatore {
    font-size: 1.5rem;
  }
}
</style>
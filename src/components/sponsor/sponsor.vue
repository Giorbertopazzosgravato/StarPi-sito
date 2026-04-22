<script setup>
import { ref } from "vue";
import Inserzione from "@/components/sponsor/InsersioneSponsor.vue";

const Collaboratori_Principali = ref([

  {titolo:"DEWESoft",           descrizione:"Proprio loro",                     imageURL:"/sponsor_page/dewe.png"  ,      categoria:"", riferimento:"https://dewesoft.com/it"},
  {titolo:"Nlcomp",             descrizione:"Ebbene si",                        imageURL:"/sponsor_page/nlcomp.webp",     categoria:"", riferimento:"https://northernlightcomposites.com/"},
  {titolo:"Università di pisa", descrizione:"Nonostante tutto",                 imageURL:"/sponsor_page/unipi.jpg",       categoria:"", riferimento:"https://www.unipi.it/"},
  {titolo:"CRM composti",       descrizione:"Mettere una descrizione",          imageURL:"/sponsor_page/CRMcomposti.png", categoria:"", riferimento:"https://crmcompositi.com/"},
  {titolo:"EUROAVIA Pisa",      descrizione:"Si vola",                          imageURL:"/sponsor_page/EUROAVIAPisa.png",categoria:"", riferimento:"https://pisa.euroavia.eu/"}
]);

const Collaboratori_Secondari = ref([
  {titolo:"AISLER",             descrizione:"Lo sanno solo loro cosa fanno",    imageURL:"/sponsor_page/AISLER.png",      categoria:"", riferimento:"https://aisler.net/it"},
  {titolo:"Ansys",              descrizione:"Quelli meglio erano finiti",       imageURL:"/sponsor_page/Ansys.png",       categoria:"", riferimento:"https://www.ansys.com/it-it"}
]);

const Collaboratori_Terzi = ref([
  {titolo:"BLUETTI",            descrizione:"Palese non me ne ero dimenticato", imageURL:"/sponsor_page/BLUETTI.png",     categoria:"", riferimento:"https://it.bluettipower.eu/"},
	{titolo: "Péguet", descrizione: "", imageURL: "/sponsor_page/peguet.jpeg", categoria: "", riferimento: "https://www.peguet.com/peguet-maillons-rapides"}
]);
</script>

<template>
  <div class="page-container">
    <div class="header-logo-container">
      <img src="/public/sponsor_page/Sfondale.png" alt="logo" class="top-logo">
    </div>

    <hr class="separator">


    <h1 class="separatore"> Main Partners: </h1>
    <!--:descrizione="Ente.descrizione"-->
    <div class="news-feed">
      <template v-for="(Ente, index) in Collaboratori_Principali" :key="index">
        <div class="feed-item">
          <Inserzione
              :titolo="Ente.titolo"
              :imageURL="Ente.imageURL"
              :categoria="Ente.categoria"
              :image_goes_left="true"
              :rifermento="Ente.riferimento"
          />
        </div>
      </template>
    </div>

    <h1 class="separatore"> Partners: </h1>
    <!--:descrizione="Ente.descrizione"-->
    <div class="news-feed">
      <template v-for="(Ente, index) in Collaboratori_Secondari" :key="index">
        <div class="feed-item">
          <Inserzione
              :titolo="Ente.titolo"
              :imageURL="Ente.imageURL"
              :categoria="Ente.categoria"
              :image_goes_left="true"
              :rifermento="Ente.riferimento"
          />
        </div>
      </template>
    </div>

    <h1 class="separatore"> In collaboration with: </h1>
    <!--:descrizione="Ente.descrizione"-->
    <div class="news-feed">
      <template v-for="(Ente, index) in Collaboratori_Terzi" :key="index">
        <div class="feed-item">
          <Inserzione
              :titolo="Ente.titolo"
              :imageURL="Ente.imageURL"
              :categoria="Ente.categoria"
              :image_goes_left="true"
              :rifermento="Ente.riferimento"
          />
        </div>
      </template>
    </div>


  </div>
</template>

<style scoped>
.separatore {
  color: #4CC9F0;
  text-align: center;
  font-size: 4rem;
}

.page-container {
  background: linear-gradient(#29446E 0%, #152845 100%);
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow-x: hidden; /* Sicurezza contro lo scroll orizzontale */
  padding-bottom: 50px; /* Spazio fluido prima del footer */
}

.header-logo-container {
  width: 100%;
  line-height: 0;
}

.top-logo {
  width: 100%;
  max-width: 100%; /* Impedisce all'immagine di uscire dai bordi */
  height: auto;
  display: block;
}

.separator {
  width: 95%;
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  margin: 10px auto 20px auto;
}

.news-feed {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Mette al centro quando non ci sono 3 elementi sponsor in una riga */
  gap: 30px;
  max-width: 1300px;
  margin: 0 auto;
}

.feed-item {
  /* Se non ha spazio stringe le colonne*/
  flex: 0 1 calc(33.333% - 30px); 
  min-width: 300px; /* Impedisce alle card di diventare troppo strette */
}

/* Fix per eliminare il rettangolo solido: rimuove il margine dell'ultimo elemento */
.last-item {
  margin-bottom: 0 !important;
}
</style>

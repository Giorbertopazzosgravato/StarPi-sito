<!--  è quasi la stessa rova della news page così sembra più coerente -->
<!--  quidni dovrebbe essere più facile da convertire per i rapporti d' immagine diversi-->

<script setup>

import NewsCard from "@/components/sponsor/InsersioneSponsor.vue";



function createIns(titolo, descrizione, imageURL){
  return {
    titolo,
    descrizione,
    imageURL: new URL(imageURL, import.meta.url).href
  }
}
const news = [
  new createIns("DEWESoft",           "Proprio loro",                     "/sponsor_page/dewe.png"),
  new createIns("Nlcomp",             "Ebbene si",                        "/sponsor_page/nlcomp.webp"),
  new createIns("Università di pisa", "Nonostante tutto",                 "/sponsor_page/unipi.jpg"),
  new createIns("CRM composti",       "Mettere una descrizione",          "/sponsor_page/CRMcomposti.png"),
  new createIns("EUROAVIA Pisa",      "Si vola",                          "/sponsor_page/EUROAVIAPisa.png"),
  new createIns("AISLER",             "Lo sanno solo loro cosa fanno",    "/sponsor_page/AISLER.png"),
  new createIns("Ansys",              "Quelli meglio erano finiti",       "/sponsor_page/Ansys.png"),
  new createIns("BLUETTI",            "Palese non me ne ero dimenticato", "/sponsor_page/BLUETTI.png")
]
</script>

<template>
  <div style="background: linear-gradient(
	#29446E 0%,
	#152845 50%
	) ">
    <img src="/sponsor_page/Sfondale.png" alt="logo" class="logoNewsLetter">
    <hr style="width: 90%; margin-top: 10vh; margin-bottom: 10vh">
    <div v-for="i in Array(news.length).keys()">
      <slot>
        <NewsCard
            :titolo="news[i].titolo"
            :descrizione="news[i].descrizione"
            :imageURL="news[i].imageURL"
            :image_goes_left=" i % 2 === 0"
        />
      </slot>
    </div>
    <br>
  </div>
</template>

<style scoped>
  .logoNewsLetter{
    max-width: 100%;
  }
</style>
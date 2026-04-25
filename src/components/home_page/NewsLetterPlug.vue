<script setup>
import NewsContainer from "@/components/home_page/NewsLetter/NewsContainer.vue";
import IscrizioneNewsLetter from "@/components/home_page/NewsLetter/IscrizioneNewsLetter.vue";
</script>

<template>
  <div class="plug-wrapper">
    <h2 class="plug-main-title">LE ULTIME NEWS</h2>
    <div class="plug-slider-container">
      <NewsContainer />
    </div>
    <IscrizioneNewsLetter/>
  </div>
</template>

<style scoped>
.plug-wrapper {
  background-color: #29446E;
  margin: 10vh auto 0 auto;
  max-width: 95vw; /* Occupa quasi tutto lo schermo ma lascia uno spazietto laterale */
  border-radius: 24px;
  height: fit-content;
  padding: 30px 10px 40px 10px; /* Mobile: poco padding laterale, buon padding sotto */
}

.plug-main-title {
  color: #FFFFFF;
  text-align: center;
  font-family: 'Nasalization', sans-serif;
  font-size: 1.8rem;
  margin-top: 10px;
  margin-bottom: 25px;
  padding: 0 10px;
}

.plug-slider-container {
  color: white;
  margin: 0 auto;
  width: 100%;
}

/* --- DESKTOP RESPONSIVE --- */
@media (min-width: 850px) {
  .plug-wrapper { max-width: 80vw; padding: 60px 40px; border-radius: 50px; }
  .plug-main-title { font-size: 3.5rem; margin-top: 0; margin-bottom: 50px; }
}
</style>
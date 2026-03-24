<script setup>
import ImageAndSlogan from "@/components/home_page/ImageAndSlogan.vue";
import ComeCollaboriamo from "@/components/home_page/ComeCollaboriamo.vue";
import Obiettivo from "@/components/home_page/Obiettivo.vue";
import NewsLetterPlug from "@/components/home_page/NewsLetterPlug.vue";
import Gradiente_Homepage from "@/assets/home_page/Gradiente_Homepage.vue";
</script>

<template>
  <div class="page-container">
    <Gradiente_Homepage/>
    <ImageAndSlogan/>
    <Obiettivo/>
	<hr class="section-separator">
    <ComeCollaboriamo/>
    <NewsLetterPlug/>
  </div>
</template>

<style scoped>
.page-container {
  background: linear-gradient(#29446E 0%, #152845 100%);
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow-x: hidden; 
  padding-bottom: 50px; 
}

.section-separator {
  width: 80%; /* La larghezza della linea */
  max-width: 1000px;
  border: 0.5px solid rgba(255, 255, 255, 0.1); /* Colore bianco semi-trasparente */
  margin: 40px auto 20px auto; /* 40px di spazio sopra, 20px sotto, centrata orizzontalmente */
}

</style>
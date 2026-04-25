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
    <Obiettivo
        titolo="IDK MAN"
        immagine="/home_page/team_image.jpeg"
    >
      Mega Froslass (spesso considerata nei contesti di simulazione come Pokémon Champions) è un'aggressiva Mega Evoluzione di tipo Ghiaccio/Spettro, eccellente nel VGC grazie all'abilità Snow Warning, che imposta la neve, aumentando la sua difesa speciale. Con base 120 Velocità e 140 Special Attack, domina con Blizzard (precisa sotto la neve), Shadow Ball e utility come Aurora Veil
       <br><br>
      Basculegion è un devastante sweeper offensivo nel VGC 2026, specialmente sotto la pioggia. Utilizza principalmente la forma maschio per l'alto attacco fisico (
      base), con abilità Swift Swim (Nuotonuoto) o Adaptability. Le mosse chiave includono Wave Crash, Last Respects (Ultimascelta), Aqua Jet e Protect. Tera Water e Life Orb massimizzano il danno.
      <br><br>
      Kingambit is a premier bulky physical attacker in VGC, utilizing high base 135 Attack, massive bulk, and the Supreme Overlord ability to dominate late-game scenarios. Key strategies involve utilizing Sucker Punch for priority, Kowtow Cleave for consistent Dark damage, and leveraging Assault Vest or Black Glasses for survivability and damage output
    </Obiettivo>
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
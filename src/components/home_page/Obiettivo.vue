<script setup>
// Definiamo le Props per rendere titolo e immagine variabili
defineProps({
  titolo: {
    type: String,
    default: "IL NOSTRO OBIETTIVO" // Titolo di default se non ne passi uno
  },
  immagine: {
    type: String,
    default: "/home_page/team_image.jpeg" // Immagine di default
  }
})
</script>

<template>
  <div class="obj-container">
    <div class="obj-text-content">
      <h1 class="obj-title"><b>{{ titolo }}</b></h1>

      <div class="obj-description">
        <slot>
          Inserisci qui il testo di default se non viene passato nulla.
        </slot>
      </div>
    </div>

    <img :src="immagine" alt="team" class="obj-image"/>
  </div>
</template>

<style scoped>
/* Il tuo CSS rimane identico, ho solo cambiato p in .obj-description */
.obj-container { display: flex; align-items: flex-start; color: white; margin-top: 5vh; padding: 0 10vw; font-family: Calibri, sans-serif; }
.obj-text-content { flex: 1; }
.obj-title { font-size: 4.5rem; margin-bottom: 2rem; margin-top: 0; }
.obj-description { max-width: 45vw; font-size: 1.25rem; line-height: 1.6; text-align: justify; white-space: pre-line; }
.obj-image { width: 500px; height: auto; margin-top: 2vh; margin-left: 5vw; border-radius: 8px; object-fit: cover; }

@media (max-width: 1024px) {
  .obj-container { flex-direction: column; align-items: center; text-align: center; padding: 0 5vw; }
  .obj-title { font-size: 2.5rem; margin-bottom: 1.5rem; }
  .obj-description { max-width: 100%; text-align: left; font-size: 1.1rem; }
  .obj-image { margin-left: 0; margin-top: 4vh; width: 100%; max-width: 500px; }
}
</style>
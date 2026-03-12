<script setup>
import { ref } from "vue";
import ProjectCard from "@/components/progetti_page/ProjectCard.vue";

// Dati aggiornati con i percorsi corretti delle tue immagini
const progetti = ref([
  { 
    title: "Rockery Team", 
    img: "/progetti_page/rockery_logo.jpg", 
    link: "/progetti/rockery" 
  },
  { 
    title: "Leaning project", 
    img: "/progetti_page/leaning_logo.jpg", 
    link: "https://www.leaningproject.it/" /* Link diretto esterno */
  },
  { 
    title: "...", 
    img: "/progetti_page/placeholder_logo.png.jpg", 
    link: "/progetti" 
  }
]);
</script>

<template>
  <div class="page-container">
    <div class="header-logo-container">
      <img 
        src="/progetti_page/progetti_logo.png" 
        alt="StarPi Progetti" 
        class="top-logo"
      >
    </div>

    <hr class="separator">

    <div class="projects-grid">
      <ProjectCard 
        v-for="(p, index) in progetti" 
        :key="index"
        :title="p.title"
        :imageURL="p.img"
        :link="p.link"
      />
    </div>
  </div>
</template>

<style scoped>
.page-container {
  background: linear-gradient(#29446E 0%, #152845 100%);
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding-bottom: 30px; /* Ridotto per non far scendere troppo il footer */
}

.header-logo-container { width: 100%; line-height: 0; }
.top-logo { width: 100%; max-width: 100%; height: auto; display: block; }

.separator {
  width: 95%; /* Coesione con NewsPage */
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  margin: 10px auto 15px auto; /* Coesione con NewsPage */
}

.projects-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  width: 90%;
  max-width: 1400px;
  margin: 10px auto 0 auto;
}

@media (max-width: 1200px) {
  .projects-grid { gap: 20px; }
}
</style>
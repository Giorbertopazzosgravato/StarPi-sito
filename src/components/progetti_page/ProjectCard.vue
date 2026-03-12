<script setup>
const props = defineProps({
  title: String,
  imageURL: String,
  link: { type: String, default: "/progetti" }
});

// Funzione per capire se il link è un sito esterno
const isExternal = (url) => url.startsWith('http');
</script>

<template>
  <a v-if="isExternal(link)" :href="link" target="_blank" class="project-card">
    <div class="logo-area">
      <img :src="imageURL" :alt="title" class="card-logo" />
    </div>
    <div class="title-wrapper">
      <h2 class="card-title">{{ title }}</h2>
      <div class="indicator"></div>
    </div>
  </a>

  <RouterLink v-else :to="link" class="project-card">
    <div class="logo-area">
      <img :src="imageURL" :alt="title" class="card-logo" />
    </div>
    <div class="title-wrapper">
      <h2 class="card-title">{{ title }}</h2>
      <div class="indicator"></div>
    </div>
  </RouterLink>
</template>

<style scoped>
.project-card {
  aspect-ratio: 1 / 1;
  width: 100%;
  
  /* --- MODIFICA DIMENSIONE: aumentata leggermente la larghezza massima per desktop --- */
  max-width: 350px; 
  
  background: linear-gradient(180deg, #3853b740 0%, #1a1f2c 100%);
  background-color: #1a1f2c; 
  border-radius: 40px; 
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
}

/* Effetto di luce StarPi e sollevamento */
.project-card:hover {
  background-color: #1e2536;
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(225, 96, 56, 0.25);
  border-color: rgba(225, 96, 56, 0.4);
}

.logo-area {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: transform 0.4s ease;
}

.project-card:hover .logo-area {
  transform: scale(1.05);
}

.card-logo {
  max-width: 80%;
  max-height: 140px;
  object-fit: contain;
  filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2));
}

.title-wrapper {
  width: 100%;
  text-align: center;
  margin-top: 15px;
}

.card-title {
  margin: 0;
  color: white; 
  font-family: 'Calibri', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.indicator {
  width: 0;
  height: 3px;
  background-color: #E16038;
  margin: 8px auto 0;
  border-radius: 2px;
  transition: width 0.3s ease;
}

.project-card:hover .indicator {
  width: 40px;
}

@media (max-width: 850px) {
  .project-card {
    max-width: 260px;
    border-radius: 35px;
    padding: 20px;
  }
  .card-title { font-size: 1.2rem; }
}
</style>
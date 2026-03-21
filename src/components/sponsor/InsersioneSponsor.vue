<script setup>
defineProps({
  titolo: String,
  descrizione: String,
  imageURL: String,
  categoria: { type: String, default: "NEWS" },
  image_goes_left: { type: Boolean, default: true },
  rifermento: { type: String, default: "/NotFound"}
});
</script>

<template>
  <a :href="rifermento" class="news-card" target="_blank">
    <div class="image-section">
      <img :src="imageURL" alt="Logo Sponsor" class="news-img" />
    </div>
    <div class="text-section">
      <div class="text-inner">
        <span class="category" v-if="categoria">{{ categoria }}</span>
        <h1 class="title">{{ titolo }}</h1>
        <p class="description">{{ descrizione }}</p>
      </div>
    </div>
  </a>
</template>

<style scoped>
.news-card {
  display: flex;
  flex-direction: column; /* Sempre verticale per la griglia */
  width: 100%;
  height: 100%; /* Occupa tutto lo spazio della cella */
  background-color: #1a1f2c;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  color: white;
  text-decoration: none;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.news-card:hover {
  background-color: #2a2f4c;
  transform: translateY(-10px); /* Effetto sollevamento */
}

.image-section {
  width: 100%;
  height: 200px; /* Altezza fissa per l'area logo */
  background: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.news-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* Evita di tagliare i loghi degli sponsor */
}

.text-section {
  padding: 20px;
  flex-grow: 1;
}

.category {
  font-size: 0.9rem;
  color: #4CC9F0;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.title {
  font-size: 1.5rem;
  margin: 10px 0;
  line-height: 1.2;
}

.description {
  font-size: 1rem;
  color: #ccc;
  line-height: 1.4;
}
</style>
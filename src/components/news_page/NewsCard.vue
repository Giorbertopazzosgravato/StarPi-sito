<script setup>
defineProps({
  titolo: String,
  descrizione: String,
  imageURL: String,
  categoria: { type: String, default: "NEWS" },
  image_goes_left: { type: Boolean, default: true }
});
</script>

<template>
  <div class="news-card" :class="{ 'row-reverse': !image_goes_left }">
    <div class="image-section">
      <img :src="imageURL" alt="News Image" class="news-img" />
    </div>
    <div class="text-section">
      <div class="text-inner">
        <span class="category">{{ categoria }}</span>
        <h1 class="title">{{ titolo }}</h1>
        <p class="description">{{ descrizione }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.news-card {
  display: flex;
  flex-direction: column;
  width: 100%; 
  background-color: #1a1f2c;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  color: white;
}

.image-section { width: 100%; height: 250px; }
.news-img { width: 100%; height: 100%; display: block; object-fit: cover; }
.text-section { width: 100%; padding: 25px; display: flex; align-items: center; }

/* Font ridimensionati per evitare overflow su mobile */
.category { font-size: 1.2rem; color: #888; font-weight: bold; letter-spacing: 2px; text-transform: uppercase; }
.title { font-size: 1.8rem; margin: 10px 0; line-height: 1.2; word-wrap: break-word; }
.description { font-size: 1.1rem; color: #ccc; line-height: 1.5; white-space: pre-wrap; }

@media (min-width: 850px) {
  .news-card { flex-direction: row; height: 380px; border-radius: 50px; }
  .row-reverse { flex-direction: row-reverse; }
  .image-section { width: 45%; height: 100%; }
  .text-section { width: 55%; padding: 40px 60px; }
  .title { font-size: 2.2rem; }
  .category { font-size: 1.5rem; }
}
</style>
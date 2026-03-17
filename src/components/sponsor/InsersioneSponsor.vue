<script setup>
defineProps({
  titolo: String,
  descrizione: String,
  imageURL: String,
  categoria: { type: String, default: "" },
  image_goes_left: { type: Boolean, default: true },
  rifermento: { type: String, default: "/NotFound"}
});
</script>

<template>
  <div class="card-container">
    <a :href="rifermento" target="_blank" class="news-card">
      <div class="image-section">
        <img :src="imageURL" alt="Logo" class="news-img" />
      </div>
      <div class="text-section">
        <div class="text-inner">
          <span v-if="categoria" class="category">{{ categoria }}</span>
          <h2 class="title">{{ titolo }}</h2>
          <p class="description">{{ descrizione }}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped>
  .card-container {
    width: 100%;
    height: 100%;
  }

  .news-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #1a1f2c;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .news-card:hover {
    background-color: #2a2f4c;
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.4);
  }

  .image-section {
    width: 100%;
    height: 140px; /* Altezza fissa per i loghi nel muro */
    background: #FFFFFF;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .news-img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .text-section {
    padding: 15px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .category {
    font-size: 0.7rem;
    color: #4CC9F0;
    font-weight: bold;
    text-transform: uppercase;
    display: block;
    margin-bottom: 4px;
  }

  .title {
    font-size: 1.1rem;
    margin: 0 0 5px 0;
    font-weight: bold;
  }

  .description {
    font-size: 0.85rem;
    color: #ccc;
    line-height: 1.3;
    margin: 0;
    /* Taglia il testo se troppo lungo per mantenere le card uniformi */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
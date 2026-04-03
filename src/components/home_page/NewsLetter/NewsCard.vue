<script setup>
defineProps({
	image: {
		type: URL,
		default: new URL("/car.gif", import.meta.url).href
	},
	title: {
		type: String,
		default: "plrrrrr",
	},
	link: {
		type: String,
		default: "",
	}
})
</script>

<template>
  <a class="container2" :href="link">
    <div class="image-wrapper">
      <img :src="image" alt="immagine" class="image">
    </div>
    <h2 class="news-title">{{ title }}</h2>
  </a>
</template>

<style scoped>
.container2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    text-decoration: none;
    color: white;
    width: 200px;        
    flex-shrink: 0;    
    margin: 15px;
}

.image-wrapper {
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    border-radius: 12px;
}

.image {
    width: 100%;         
    aspect-ratio: 1 / 1;  
    object-fit: cover;   
    border-radius: 20px; 
    display: block;
}

.container2:hover .image {
    transform: scale(1.1);
}

.news-title {
    font-family: 'Nasalization', sans-serif;
    margin-top: 15px;
    width: 100%;
    
    /* MAGIA: font-size: clamp(minimo, preferito, massimo) */
    font-size: clamp(1rem, 1.5vw, 1.8rem);
    
    line-height: 1.2;
    text-transform: uppercase;
    
    /* Evita che il testo lunghissimo rompa tutto */
    word-wrap: break-word;
    overflow-wrap: break-word;
}

/* Gestione per schermi piccoli (Mobile) */
@media (max-width: 768px) {
    .container2 {
        max-width: 150px; /* Card più piccole su mobile */
    }
}
</style>
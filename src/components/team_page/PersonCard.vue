<script setup>
defineProps({
	nome: {
		type: String,
		default: "The honoured one"
	},
	cognome: {
		type: String,
		default: "Megumi's a fraud",
	},
	imgURL: {
		type: String,
		default: new URL("/evil_car.gif", import.meta.url).href
	},
	link: {
		type: String,
		default: "https://www.linkedin.com/in/giacomo-consani-82a33a2b2/"
	}
})
</script>

<template>
	<a :href="link" class="PersonCardContainer">
		<div class="imgContainer">
			<img :src="imgURL" alt="immagine">
		</div>
		<p class="PersonCardName">{{ nome + " " + cognome}}</p>
	</a>
</template>

<style scoped>
.PersonCardContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    text-decoration: none;
    color: white;
    
    /* --- LA STABILITÀ --- */
    width: 150px;           /* Larghezza fissa invece di vw */
    flex-shrink: 0;         /* IMPEDISCE al Flexbox di rimpicciolire la card */
    margin: 10px;           /* Margine di sicurezza */
}

.imgContainer {
    width: 130px; 
    height: 160px;
    overflow: hidden;
    /* --- CORNICE PICCOLA ARANCIONE --- */
    border: 3px solid #E04814; 
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.imgContainer img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Riempie la cornice senza deformarsi */
}

.PersonCardName {
    color: white;
    font-size: 1.1rem;
    margin-top: 8px;
    width: 100%;            /* Prende tutta la larghezza della card */
    word-wrap: break-word;  /* Costringe le parole lunghe ad andare a capo */
    overflow-wrap: break-word;
}
</style>
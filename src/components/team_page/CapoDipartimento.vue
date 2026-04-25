<script setup>
defineProps({
	imgURL: {
		type: String,
		default: "/aeso.png"
	},
	nome:{
		type: String,
		default: "Il boss finale di AESO"
	},
	cognome: {
		type: String,
		default: "Megumi's a fraud"
	},
	quote: {
		type: String,
		default: ""
	},
	link:{
		type: String,
		default: "https://www.linkedin.com/in/giacomo-consani-82a33a2b2/"
	}
})
</script>

<template>
    <a :href="link">
        <div class="capoContainer">
            <img :src="imgURL" alt="immagine"> 
            <div class="capoTxtContainer">
                <h1>{{nome + " " + cognome}}</h1>
                <p v-if="quote !== null">"{{quote}}"</p>
            </div>
        </div>
    </a>
</template>

<style scoped>
.capoContainer {
    display: flex;
    margin-left: 5vw;
    margin-bottom: 5vh;
    gap: 20px; /* Spazio tra foto e testo */
}

.capoContainer img {
    max-height: 40vh;
    max-width: 40vw;
    /* --- CORNICE GRANDE --- */
    border: 6px solid #E04814;
    object-fit: cover; /* Evita che l'immagine si deformi nella cornice */
    border-radius: 8px; /* Opzionale: arrotonda leggermente gli angoli */
}

.capoTxtContainer {
    color: white;
    margin-left: 2vw;
}

.capoTxtContainer h1 {
    font-size: clamp(1.5rem, 5vw, 3rem); /* Font fluido: non sparisce su mobile */
}

.capoTxtContainer p {
    font-size: 1.2rem;
    max-width: 40rem;
}

/* FIX PER MOBILE */
@media (max-width: 768px) {
    .capoContainer {
        flex-direction: column; /* Su mobile l'immagine sta sopra il testo */
        align-items: center;
        margin-left: 0;
        text-align: center;
    }
    .capoContainer img {
        max-width: 80vw; /* Più grande su mobile per leggibilità */
    }
}
</style>
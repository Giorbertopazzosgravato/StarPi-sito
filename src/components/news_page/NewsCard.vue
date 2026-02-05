<script setup>
defineProps({
	titolo: {
		type: String,
		default: "Titolo clickbait",
	},
	descrizione: {
		type: String,
		default: "Piccola descrizione con le cose che abbiamo fatto\nma veramente piccola\ntipo questa deve essere la lunghezza massima\nFatela clickbait"
	},
	imageURL: {
		type: URL,
		default: new URL("/car.gif", import.meta.url).href
	},
	image_goes_left: {
		type: Boolean,
		default: true,
	}
})
</script>

<template>
	<div class="newsContainer">
		<img class="immagine" :class="{left: image_goes_left, right: !image_goes_left}" :src="imageURL" alt="immagine">
		<div class="textContainer">
			<h1 class="titoloNews">{{titolo}}</h1>
			<p class="descrizioneNews">{{descrizione}}</p>
		</div>
	</div>
</template>

<style scoped>
	.newsContainer{
		display: flex;
		flex-shrink: 0;
		flex-grow: 0;
		width: 80vw;
		height: 50vh;
		border: solid 2px white;
		border-radius: 24px;
		margin-left: auto;
		margin-right: auto;
		color: white;
		overflow: hidden;
	}
	.newsContainer:hover{
		border: solid 2px #E16038;
		background-color: rgba(41, 68, 110, 0.5);
	}
	.immagine{
		height: 80%;
		margin-top: auto;
		margin-bottom: auto;
	}
	.left{
		margin-right: auto;
		margin-left: 5%;
	}
	.right{
		margin-left: auto;
		margin-right: 5%;
	}
	.textContainer{
		max-width: 80%;
		margin-right: auto;
		margin-left: -15%;
	}
	.titoloNews{
		font-size: 4em;
	}
	.descrizioneNews{
		font-size: 1.7em;
		white-space: pre-wrap;
	}
</style>
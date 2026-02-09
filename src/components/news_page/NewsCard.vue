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
		type: String,
		default: new URL("/car.gif", import.meta.url).href
	},
	image_goes_left: {
		type: Boolean,
		default: false,
	}
})
</script>

<template>
	<div class="newsContainer">
		<img class="immagine" :class="{imgLeft: image_goes_left, imgRight: !image_goes_left}" :style="{display: (image_goes_left)?'': 'none'}" :src="imageURL" alt="immagine">
		<div class="textContainer" :class="{txtLeft: !image_goes_left, txtRight: image_goes_left}">
			<h1 class="titoloNews">{{titolo}}</h1>
			<p class="descrizioneNews">{{descrizione}}</p>
		</div>
		<img class="immagine" :class="{imgLeft: image_goes_left, imgRight: !image_goes_left}" :style="{display: (!image_goes_left)?'': 'none'}" :src="imageURL" alt="immagine">
	</div>
</template>

<style scoped>
	.newsContainer{
		margin-bottom: 5%;
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
		max-width: 35%;
		max-height: 80%;
		margin-top: auto;
		margin-bottom: auto;
	}
	.imgLeft{
		margin-right: auto;
		margin-left: 5%;
	}
	.imgRight{
		margin-left: auto;
		margin-right: 5%;
	}
	.txtLeft{
		margin-right: auto;
		margin-left: 5%;
	}
	.txtRight{
		margin-left: -15%;
	}
	.textContainer{
		max-width: 80%;
		margin-right: auto;
	}
	.titoloNews{
		font-size: 4em;
	}
	.descrizioneNews{
		font-size: 1.7em;
		white-space: pre-wrap;
	}
</style>
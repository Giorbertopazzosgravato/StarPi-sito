<script setup>
defineProps({
	nome: {
		type: String,
		default: "The honoured one"
	},
	imgURL: {
		type: String,
		default: new URL("/evil_car.gif", import.meta.url).href
	},
	linkedin_link: {
		type: String,
		default: "https://www.linkedin.com/in/giacomo-consani-82a33a2b2/"
	}
})
</script>

<template>
	<a :href="linkedin_link" class="PersonCardContainer">
		<div class="imgContainer">
			<img :src="imgURL" alt="immagine">
		</div>
		<p class="PersonCardName">{{ nome }}</p>
	</a>
</template>

<style scoped>
.PersonCardContainer{
	display: grid;
	text-align: center;
	width: fit-content;
	margin-left: auto;
	margin-right: auto;
}
.PersonCardName{
	color: white;
	font-size: 2em;
	margin-top: -0.1%;
	margin-bottom: -10%;
}
.imgContainer{
	margin-left: auto;
	margin-right: auto;
	width: 10vw;
	height: 20vh;
	overflow: hidden;
	display: flex;
	justify-content: center;
}
.imgContainer img{
	height: 20vh;
}
</style>
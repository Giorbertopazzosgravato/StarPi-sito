<script setup>
defineProps({
	imgURL: {
		type: String,
		default: new URL( "/aeso.png",import.meta.url).href
	},
	nome:{
		type: String,
		default: "Il boss finale di AESO"
	},
	quote: {
		type: String,
		default: "te lo metto in culo con le cache"
	},
	linkedin_link:{
		type: String,
		default: "https://www.linkedin.com/in/giacomo-consani-82a33a2b2/"
	}
})
</script>

<template>
	<a :href="linkedin_link">
		<div class="capoContainer">
			<img :src="imgURL" alt="immagine">
			<div class="capoTxtContainer">
				<h1>{{nome}}</h1>
				<p>"{{quote}}"</p>
			</div>
		</div>
	</a>


</template>

<style scoped>
.capoContainer{
	display: flex;
	margin-left: 5vw;
	margin-bottom: 5vh;
}
.capoContainer img{
	max-height: 40vh;
	max-width: 40vw;
}
.capoTxtContainer{
	color: white;
	margin-left: 5vw;

}
.capoTxtContainer h1{
	font-size: 3em;
}
.capoTxtContainer p{
	font-size: 1.5em;
	max-width: 40rem;
}
</style>
<script setup>
	import {reactive} from "vue";
	import PresentazioneSettoreCard from "@/components/home_page/PresentazioneSettoreCard.vue";
	console.log("(=^･ω･^=) <-mao")
	// const card_template = {
	// 	title: "titolo",
	// 	descrizione: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	// 	image_src: "/download.jpg"
	// }
	const cards = reactive([
		{
			title: "FLIGHT DYNAMICS",
			descrizione: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			image_src: "/download.jpg"
		},
		{
			title: "AVIONICS",
			descrizione: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			image_src: "/download.jpg"
		},
		{
			title: "PAYLOAD",
			descrizione: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			image_src: "/download.jpg"
		},
		{
			title: "RECOVERY SYSTEM",
			descrizione: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			image_src: "/download.jpg"
		},
		{
			title: "PROPULSION",
			descrizione: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			image_src: "/download.jpg"
		},
		{
			title: "LOGISTICS & MARKETING",
			descrizione: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			image_src: "/download.jpg"
		},
	]);
</script>

<template>
<div class="container">
	<h1>COME COLLABORIAMO</h1>

	<PresentazioneSettoreCard v-for="card in cards" key="card.title">
		<template #titolo>{{card.title}}</template>
		<template #descrizione >{{card.descrizione}}</template>
		<template #image ><img :src="card.image_src" alt="image"></template>
	</PresentazioneSettoreCard>

</div>
</template>

<style scoped>
.container{
	margin: auto;
	color: white;
}
h1{
	text-align: center;
}

</style>
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
	<img :src="image" alt="immagine" class="image">
	<h1>{{ title }}</h1>
</a>
</template>

<style scoped>
.image{
	width: 15vw;
	height: 15vw;
	background-size: 100% 100%;
	background-position: center;
	background-repeat: no-repeat;
	margin-left: auto;
	margin-right: auto;
}
.container2{
	justify-content: center;
	text-align: center;
	width: 15vw;
	height: fit-content;
	color: white;
}


</style>
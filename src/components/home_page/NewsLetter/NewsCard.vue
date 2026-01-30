<script setup>
defineProps({
	image: {
		type: URL,
		default: new URL("/car.gif", import.meta.url).href
	},
	title: {
		type: String,
		default: "plrrrrr",
	}
})
</script>

<template>
<div class="container2">
	<img :src="image" alt="immagine" class="image">
	<h1>{{ title }}</h1>
</div>
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
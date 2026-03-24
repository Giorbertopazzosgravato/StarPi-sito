<script setup>
defineProps({
	image: {
		type: String,
		default: "/car.gif"
	},
	title: {
		type: String,
		default: "News Title",
	}
})
</script>

<template>
	<div class="news-card">
		<div class="image-wrapper">
			<img :src="image" alt="immagine news" class="card-image">
		</div>
		<h3 class="card-title">{{ title }}</h3>
	</div>
</template>

<style scoped>
.news-card {
	min-width: 280px;
	width: 280px;
	background-color: #1a233a; /* Un blu scuro coerente con il design */
	border-radius: 24px;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	color: white;
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	cursor: pointer;
}

.news-card:hover {
	transform: translateY(-8px);
	box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
}

.image-wrapper {
	width: 100%;
	height: 180px;
	background-color: #0d1424;
}

.card-image {
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
}

.card-title {
	font-size: 1.2rem;
	padding: 20px 15px;
	margin: 0;
	text-align: center;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis; /* Aggiunge "..." se il titolo è troppo lungo */
}
</style>
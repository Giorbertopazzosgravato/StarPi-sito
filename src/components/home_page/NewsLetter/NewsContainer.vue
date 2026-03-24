<script setup>
import NewsCard from "@/components/home_page/NewsLetter/NewsCard.vue";
import { onMounted, ref } from "vue";

const newsContainer = ref(null);

const news = ref([
	{ image: "/car.gif", title: "waaaaaaa" },
	{ image: "/car.gif", title: "weeeeeee" },
	{ image: "/car.gif", title: "wiiiiiii" },
	{ image: "/car.gif", title: "wooooooo" } // Aggiunto titolo per evitare card vuote
]);

async function fetch_news() {
	try {
		const response = await fetch("http://localhost:7878/database/please_server_I_need_this_my_news_is_kinda_homeless");
		if (!response.ok) {
			throw new Error("my news are kinda homeless");
		}
		console.log("(=^･ω･^=) <-mao ")
		const data = await response.json();
		news.value = data;
	} catch(e) {
		console.log(e);
	}
}

onMounted(() => {
	fetch_news();
})

function scrollLeft() {
	if (newsContainer.value) {
		newsContainer.value.scrollBy({ left: -320, behavior: "smooth" });
	}
}
function scrollRight() {
	if (newsContainer.value) {
		newsContainer.value.scrollBy({ left: 320, behavior: "smooth" });
	}
}
</script>

<template>
	<div class="carousel-wrapper">
		<button @click="scrollLeft" class="nav-btn left-btn">&lt;</button>
		
		<div class="news-scroll-container" ref="newsContainer">
			<NewsCard 
				v-for="(card, index) in news" 
				:key="index" 
				:image="card.image" 
				:title="card.title" 
			/>
		</div>
		
		<button @click="scrollRight" class="nav-btn right-btn">&gt;</button>
	</div>
</template>

<style scoped>
.carousel-wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 15px;
	width: 100%;
	max-width: 1100px;
	margin: 0 auto;
}

.news-scroll-container {
	display: flex;
	gap: 20px;
	overflow-x: auto;
	scroll-behavior: smooth;
	padding: 20px 10px; /* Spazio per l'ombra dell'hover delle card */
	
	/* Nasconde la scrollbar ma mantiene lo scorrimento */
	scrollbar-width: none; /* Firefox */
	-ms-overflow-style: none; /* IE and Edge */
}
.news-scroll-container::-webkit-scrollbar {
	display: none; /* Chrome, Safari and Opera */
}

.nav-btn {
	background-color: rgba(255, 255, 255, 0.1);
	border: 1px solid rgba(255, 255, 255, 0.2);
	color: white;
	font-size: 1.5rem;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	flex-shrink: 0;
	transition: all 0.3s ease;
}

.nav-btn:hover {
	background-color: #E16038;
	transform: scale(1.1);
}

@media (max-width: 768px) {
	.nav-btn { display: none; } /* Su mobile nascondiamo i bottoni e si scorre col dito */
}
</style>
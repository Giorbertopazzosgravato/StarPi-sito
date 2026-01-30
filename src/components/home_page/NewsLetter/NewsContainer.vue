<script setup>
import NewsCard from "@/components/home_page/NewsLetter/NewsCard.vue";

const news = [
	{
		image: "/car.gif",
		title: "waaaaaaa",
	},
	{
		image: "/car.gif",
		title: "weeeeeee",
	},
	{
		image: "/car.gif",
		title: "wiiiiiii",
	},
	{

	}
]
</script>

<template>
	<div class="container">
		<button><</button>
		<div class="newsContainer">
			<NewsCard v-for="card in news" :key = "card.title" :image = card.image :title=card.title class="newsCard"/>
		</div>
		<button>></button>
	</div>
</template>

<style scoped>
.container{
	display: flex;
}
.newsContainer{
	display: flex;
	background-color: rgba(28, 42, 106, 0.57);
	max-width: 55vw;
	overflow: scroll;
	gap: 5vw;
	border-radius: 40px;
	padding: 2%;
}
.newsContainer::-webkit-scrollbar{width: 10px; height: 50% }
.newsContainer::-webkit-scrollbar-button{ display: none; }
.newsContainer::-webkit-scrollbar-track{ display: none; }
.newsContainer::-webkit-scrollbar-track-piece{ display: none; }
.newsContainer::-webkit-scrollbar-thumb{ border-radius: 24px; background-color: rgba(0, 12, 38, 0.5); }
.newsContainer::-webkit-scrollbar-corner{ display: none; }

.newsCard{

}
</style>
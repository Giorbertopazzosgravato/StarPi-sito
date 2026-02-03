<script setup>
import NewsCard from "@/components/home_page/NewsLetter/NewsCard.vue";
import {ref} from "vue";

const newsContainer = ref(null);
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

function scrollLeft(){
	if (newsContainer.value){
		newsContainer.value.scrollBy({
			left: -300,
			behavior: "smooth"
		})
	}
}
function scrollRight(){
	if (newsContainer.value){
		newsContainer.value.scrollBy({
			left: 300,
			behavior: "smooth"
		})
	}
}
</script>

<template>
	<div class="container">
		<button @click="scrollLeft" class="left">&lt;</button>
		<div class="newsContainer" ref="newsContainer">
			<NewsCard v-for="card in news" :key = "card.title" :image = card.image :title=card.title class="newsCard"/>
		</div>
		<button @click="scrollRight" class="right">&gt;</button>
	</div>
</template>

<style scoped>
.container{
	position: relative;
	max-width: fit-content;
	max-height: fit-content;
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
button{
	position: absolute;
	/* width ; height */
	width: 2vw;
	height: 30vh;
}
.left{
	top: 50%;
	transform: translate(-100%, -50%);
}
.right{
	right: 0;
	top: 50%;
	transform: translate(100%, -50%);
}

.newsContainer::-webkit-scrollbar{width: 10px; height: 50% }
.newsContainer::-webkit-scrollbar-button{ display: none; }
.newsContainer::-webkit-scrollbar-track{ display: none; }
.newsContainer::-webkit-scrollbar-track-piece{ display: none; }
.newsContainer::-webkit-scrollbar-thumb{ border-radius: 24px; background-color: rgba(0, 12, 38, 0.5); }
.newsContainer::-webkit-scrollbar-corner{ display: none; }

.newsCard{

}
button{
	flex-shrink: 0;
	flex-grow: 0;
}
</style>
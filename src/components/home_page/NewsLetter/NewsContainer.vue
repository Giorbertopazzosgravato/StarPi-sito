<script setup>
import NewsCard from "@/components/home_page/NewsLetter/NewsCard.vue";
import {onMounted, ref} from "vue";

const newsContainer = ref(null);

const news = ref([
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
]);

async function fetch_news(){
	try{
		const response = await fetch("/database/please_server_I_need_this_my_news_is_kinda_homeless");
		if(!response.ok){
			throw new Error("my news are kinda homeless");
		}
		console.log("(=^･ω･^=) <-mao ")
		const data = await response.json();
		console.log("data: ", data);
		news.value = data;

	} catch(e){
		console.log(e);
	}
}

onMounted(()=>{
	fetch_news();
})


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
		<button @click="scrollLeft" class="nav-button"><span>&#10094;</span></button>
		<div class="newsContainer" ref="newsContainer">

			<NewsCard v-for="card in news" :key = "card.title" :image = card.image :title=card.title class="newsCard" :link="card.link"/>
		</div>
		<button @click="scrollRight" class="nav-button"><span>&#10095;</span></button>
	</div>
</template>

<style scoped>
.container{
	display: flex;
	align-items: center;
	justify-content: center;
    gap: 20px; 
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
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

.nav-button {
    width: 50px;
    height: 50px;
    background: #0F1B31;
    border: 2px solid #E04814;
    border-radius: 50%;
    color: #E04814;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav-button:hover:not(.nav-button-disabled) {
    background: #E04814;
    color: white;
    transform: scale(1.1);
}

.nav-button-disabled {
    opacity: 0.3;
    cursor: not-allowed;
    border-color: #555;
    color: #555;
}

.newsContainer::-webkit-scrollbar{width: 10px; height: 50% }
.newsContainer::-webkit-scrollbar-button{ display: none; }
.newsContainer::-webkit-scrollbar-track{ display: none; }
.newsContainer::-webkit-scrollbar-track-piece{ display: none; }
.newsContainer::-webkit-scrollbar-thumb{ border-radius: 24px; background-color: rgba(0, 12, 38, 0.5); }
.newsContainer::-webkit-scrollbar-corner{ display: none; }

button{
	flex-shrink: 0;
	flex-grow: 0;
}
</style>
<script setup>

import NewsCard from "@/components/news_page/NewsCard.vue";
import IscrizioneNewsLetter from "@/components/news_page/IscrizioneNewsLetter.vue";
import Displayer from "@/components/news_page/displayer.vue";
function createNews(titolo, descrizione, imageURL){
	return {
		titolo,
		descrizione,
		imageURL: new URL(imageURL, import.meta.url).href
	}
}
const news = [
	new createNews("ciao", "ciao, sono giacomo, questa e' una news!", "./team_page/sukuna.png"),
	new createNews("ciao anita", "wow, ma c'e' anche la mia fidanzata bellissima qua", "./team_page/gojo_one_tooth.webp"),
	new createNews("addio", "boh, mi sono rotto il cazzo porcoddio", "./team_page/todo.jpeg"),
	{}
]
</script>

<template>
	<div style="background: linear-gradient(
	#29446E 0%,
	#152845 50%
	) ">
		<img src="./assets/background_logo%20news%20page.png" alt="logo" class="logoNewsLetter">
		<hr style="width: 90%; margin-top: 10vh; margin-bottom: 10vh">
		<div v-for="i in Array(news.length + 1).keys()">
			<displayer>
				<div v-if="i === 2" style="background: linear-gradient(#152845 0%, #29446E 50%, #152845 100%)">
					<IscrizioneNewsLetter />
				</div>

				<NewsCard
					v-else
					:titolo="news[i < 2 ? i : i - 1].titolo"
					:descrizione="news[i < 2 ? i : i - 1].descrizione"
					:imageURL="news[i < 2 ? i : i - 1].imageURL"
					:image_goes_left="(i < 2 ? i : i - 1) % 2 === 0"
				/>
			</displayer>
		</div>
	</div>

	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
</template>

<style scoped>
	.logoNewsLetter{
		max-width: 100vw;
	}
</style>
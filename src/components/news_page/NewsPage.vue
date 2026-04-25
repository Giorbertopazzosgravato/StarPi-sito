<script setup>
import {onMounted, ref} from "vue";
import NewsCard from "@/components/news_page/NewsCard.vue";
import IscrizioneNewsLetter from "@/components/news_page/IscrizioneNewsLetter.vue";

const newsList = ref([
  // { titolo: "Joker Persona 5", descrizione: "dasdsadasdasdasd.", imageURL: "/news_page/sukuna.png", categoria: "OFFICIAL" },
  // { titolo: "Non ci crederete mai", descrizione: "Se ti svegli con quattro palle il nemico lo hai alle spalle.", imageURL: "/news_page/gojo_one_tooth.webp", categoria: "TECH" },
  // { titolo: "Inter merda", descrizione: "suca", imageURL: "/news_page/todo.jpeg", categoria: "SPONSOR" }
]);

async function fetch_news(){
	try{
		const response = await fetch("/database/please_server_send_me_newds");
		if(!response.ok){
			throw new Error("my news are kinda homeless");
		}
		console.log("(=^･ω･^=) <-mao ")
		const data = await response.json();
		console.log("data: ", data);
		newsList.value = data;

	} catch(e){
		console.log(e);
	}
}

onMounted(()=>{
	fetch_news();
})
</script>

<template>
  <div class="page-container">
    <div class="header-logo-container">
      <img src="/news_page/background_logo%20news%20page.png" alt="logo" class="top-logo">
    </div>

    <hr class="separator">

    <div class="news-feed">
      <template v-for="(news, index) in newsList" :key="index">
        <div class="feed-item">
			<a :href="news.link">
				<NewsCard
					:titolo="news.titolo"
					:descrizione="news.descrizione"
					:imageURL="news.imageURL"
					:categoria="news.categoria"
					:image_goes_left="index % 2 === 0"
				/>
			</a>

        </div>

        <div v-if="index === 1" class="feed-item">
          <IscrizioneNewsLetter />
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  background: linear-gradient(#29446E 0%, #152845 100%);
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow-x: hidden; /* Sicurezza contro lo scroll orizzontale */
  padding-bottom: 50px; /* Spazio fluido prima del footer */
}

.header-logo-container { 
  width: 100%; 
  line-height: 0; 
}

.top-logo { 
  width: 100%; 
  max-width: 100%; /* Impedisce all'immagine di uscire dai bordi */
  height: auto; 
  display: block; 
}

.separator {
  width: 95%;
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  margin: 10px auto 20px auto;
}

.news-feed {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.feed-item {
  width: 95%;
  max-width: 1200px;
  margin: 15px auto;
}

/* Fix per eliminare il rettangolo solido: rimuove il margine dell'ultimo elemento */
.last-item {
  margin-bottom: 0 !important;
}
</style>
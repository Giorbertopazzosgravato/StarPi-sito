<script setup>
import NewsContainer from "@/components/home_page/NewsLetter/NewsContainer.vue";
import IscrizioneNewsLetter from "@/components/home_page/NewsLetter/IscrizioneNewsLetter.vue";
</script>

<template>
	<div class="newsPlugContainer">
		<h1 class="plug-title">LE ULTIME NEWS</h1>
		<div class="NewsContainer">
			<NewsContainer />
		</div>
		
		<hr class="plug-separator">
		
		<div class="newsletter-wrapper">
			<IscrizioneNewsLetter/>
		</div>
	</div>
</template>

<style scoped>
.newsPlugContainer {
	background-color: #152845; /* Sfondo che si fonde meglio col main */
	width: 95%;
	max-width: 1200px;
	margin: 80px auto;
	border-radius: 40px;
	padding: 40px 20px;
	box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.plug-title {
	text-align: center;
	font-size: 2.5rem;
	color: white;
	margin: 0 0 30px 0;
}

.NewsContainer {
	color: white;
	margin: 0 auto;
	width: 100%;
}

.plug-separator {
	width: 80%;
	border: 0.5px solid rgba(255, 255, 255, 0.1);
	margin: 40px auto;
}

.newsletter-wrapper {
	width: 100%;
}

@media (min-width: 850px) {
	.newsPlugContainer { padding: 60px 40px; border-radius: 50px; }
	.plug-title { font-size: 3.5rem; margin-bottom: 50px; }
}
</style>
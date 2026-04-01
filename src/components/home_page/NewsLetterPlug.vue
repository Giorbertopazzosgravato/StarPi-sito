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
		<IscrizioneNewsLetter/>
	</div>
</template>

<style scoped>
.newsPlugContainer{
	background-color: #29446E;
	margin-left: auto;
	margin-right: auto;
	max-width: 80vw;
	border-radius: 24px;
	margin-top: 10vh;
	height: fit-content;
	padding-bottom: 4%;
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

.plug-title {
	color: #FFFFFF;
	text-align: center;
	font-size: 2.5rem;
	margin-top: 40px;
	margin-bottom: 20px;
	font-family: 'Nasalization';
	font-weight: 400;
}

@media (min-width: 850px) {
	.newsPlugContainer { padding: 60px 40px; border-radius: 50px; }
	.plug-title { font-size: 3.5rem; margin-bottom: 50px; }
}
</style>
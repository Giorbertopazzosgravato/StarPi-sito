<script setup>

import NewsContainer from "@/components/home_page/NewsLetter/NewsContainer.vue";
import IscrizioneNewsLetter from "@/components/home_page/NewsLetter/IscrizioneNewsLetter.vue";
</script>

<template>
	<div class="container">
		<div class="NewsContainer">
			<NewsContainer />
		</div>
		<hr>
		<IscrizioneNewsLetter/>
	</div>
</template>

<style scoped>
.container{
	background-color: red;
	margin-left: auto;
	margin-right: auto;
	max-width: 80vw;
}
.NewsContainer{
	margin-left: auto;
	margin-right: auto;
	max-width: fit-content;
}
</style>
<script setup>

import NewsContainer from "@/components/home_page/NewsLetter/NewsContainer.vue";
import IscrizioneNewsLetter from "@/components/home_page/NewsLetter/IscrizioneNewsLetter.vue";
</script>

<template>
	<div class="container">
		<div class="NewsContainer">
			<h1>LE ULTIME NEWS</h1>
			<NewsContainer />
		</div>
		<hr style="margin-top: 5%;">
		<IscrizioneNewsLetter/>
	</div>
</template>

<style scoped>
.container{
	background-color: #29446E;
	margin-left: auto;
	margin-right: auto;
	max-width: 80vw;
	border-radius: 24px;
	margin-top: 10vh;
	height: fit-content;
	padding-bottom: 1%;
}
.NewsContainer{
	position: relative;
	color: white;
	margin-left: auto;
	margin-right: auto;
	max-width: fit-content;
}
h1{
	transform: translate(0, 50%);
	text-align: center;
	font-size: 4em;
}
@media (max-width: 1366px){
	h1{
		transform: translate(0, 50%);
		text-align: center;
		font-size: 3em;
	}
}
</style>
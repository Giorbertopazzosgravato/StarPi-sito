<script setup>
import TeamSubsection from "@/components/team_page/TeamSubsection.vue";
function createCapoDipartimento(nome, quote, linkedin_link, imgURL){
	return {
		nome, quote, linkedin_link, imgURL
	}
}
function createPersona(nome, linkedin_link, imgURL){
	return {
		nome, linkedin_link, imgURL
	}
}

</script>

<template>
	<TeamSubsection
		nome_dipartimento="Architetture e sistemi operativi"
		:capoDipartimento="
			new createCapoDipartimento(
			'Marco Danelutto',
			'odio architetture e sistemi operativi',
			'https://pornhub.com/',
			'/aeso.png'
			)"
		:persone="[
			new createPersona('Giacomo Consani', '', '/car.gif'),
			new createPersona('Adnaan Juma', '', '/download.jpg'),
			new createPersona('Riccardo Necrofilo', '', '/big_raga.webp'),
			new createPersona('Avni Jashari', '', '/../src/assets/home_page/placeholder.png'),
			new createPersona(),
		]"
	/>

</template>

<style scoped>
</style>
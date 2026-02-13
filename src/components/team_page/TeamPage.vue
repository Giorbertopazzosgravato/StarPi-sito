<script setup>
import TeamSubsection from "@/components/team_page/TeamSubsection.vue";
import AnnataWrapper from "@/components/team_page/AnnataWrapper.vue";
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
	<div class="TeamsImageContainer">
		<img src="/team_page/teams_background.png" width="100%" alt="bgimage"/>
	</div>
	<AnnataWrapper anno="2025">
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
			new createPersona('Avni Jashari', '', '/home_page/placeholder.png'),
			new createPersona(),
		]"
		/>
	</AnnataWrapper>
	<AnnataWrapper anno="2024">
		<TeamSubsection
			nome_dipartimento="FROCI ALLA RISCOSSA"
			:capoDipartimento="
			new createCapoDipartimento(
			'Alessandro Bonari',
			'amo i froci e i cazzi mlml',
			'https://pornhub.com/',
			'/team_page/alessandro.png'
			)"
			:persone="[
			new createPersona('Giacomo Consani', '', '/car.gif'),
			new createPersona('Adnaan Juma', '', '/download.jpg'),
			new createPersona('Riccardo Necrofilo', '', '/big_raga.webp'),
			new createPersona('Avni Jashari', '', '/home_page/placeholder.png'),
			new createPersona(),
		]"
		/>
		<TeamSubsection
			nome_dipartimento="EPSTEIN COMPETITORS"
			:capoDipartimento="
			new createCapoDipartimento(
			'Riccardo Frociazzo',
			'mi sono dimenticato di nuovo il cognome, viva i processori pipeline, Marco danelutto mi fa una sega a 4 mani',
			'https://pornhub.com/',
			'/team_page/epstein.webp'
			)"
			:persone="[
			new createPersona('Giacomo Consani', '', '/car.gif'),
			new createPersona('Adnaan Juma', '', '/download.jpg'),
			new createPersona('Vincenzo Gervasi', '', '/team_page/VincenzoGervasi.jpg'),
			new createPersona('Avni Jashari', '', '/home_page/placeholder.png'),
			new createPersona(),
		]"
		/>
	</AnnataWrapper>


</template>

<style scoped>
.TeamsImageContainer{
	display: flex;
	justify-content: center;
	max-width: 100%;
	overflow: hidden;
}
</style>
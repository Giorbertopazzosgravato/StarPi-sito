<script setup>

import PersonCard from "@/components/team_page/PersonCard.vue";
</script>

<template>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<div class="test">
		<PersonCard imgURL="/download.jpg" nome="il mio collaboratore"/>
		<PersonCard imgURL="/car.gif" nome="Giacomo Consani"/>
		<PersonCard imgURL="/favicon.ico" nome="fuckass vue"/>
		<PersonCard imgURL="/big_raga.webp" nome="big raga the opp stoppah"/>
		<PersonCard/>
		<PersonCard/>
		<PersonCard/>
		<PersonCard/>
		<PersonCard/>
		<PersonCard/>
		<PersonCard/>
		<PersonCard/>
		<PersonCard/>
		<PersonCard/>
	</div>

</template>

<style scoped>
.test{
	display: grid;
	grid-template-columns: repeat(6, auto);
	gap: 3vw;
	width: fit-content;
	max-width: 90vw;
	margin-left: auto;
	margin-right: auto;
}
</style>
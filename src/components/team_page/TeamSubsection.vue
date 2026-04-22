<script setup>
import CapoDipartimento from "@/components/team_page/CapoDipartimento.vue";
import PersonCard from "@/components/team_page/PersonCard.vue";

const props = defineProps({
	nome_dipartimento: {
		type: String,
		default: "Giacomo e' fortissimo"
	},
	capo_dipartimento:[{
		imgURL: {
			type: String,
			default: new URL( "/aeso.png",import.meta.url).href
		},
		nome:{
			type: String,
			default: "Il boss finale di AESO"
		},
		cognome: {
			type: String,
			default: "The honoured one"
		},
		quote: {
			type: String,
			default: ""
		},
		link:{
			type: String,
			default: "https://www.linkedin.com/in/giacomo-consani-82a33a2b2/"
		}
	}],
	persone: [{
		nome: {
			type: String,
			default: "The honoured one"
		},
		cognome: {
			type: String,
			default: "The honoured one"
		},
		imgURL: {
			type: String,
			default: new URL("/evil_car.gif", import.meta.url).href
		},
		link: {
			type: String,
			default: "https://www.linkedin.com/in/giacomo-consani-82a33a2b2/"
		}
	}]
})
console.log(props.capo_dipartimento)
</script>

<template>
	<div>

		<h1 class="titolone">{{nome_dipartimento}}</h1>
		<CapoDipartimento v-for="capo in capo_dipartimento" :key="capo.nome"
						  :nome="capo.nome"
						  :cognome="capo.cognome"
						  :imgURL="capo.imgURL"
						  :quote="(capo.quote !== null)? capo.quote : 'Chief of ' + nome_dipartimento"
						  :link="capo.link"
		/>
		<div class="persone">
			<div v-for="persona in persone" :key="persona.nome">
				<PersonCard
					:nome="persona.nome"
					:cognome="persona.cognome"
					:imgURL="persona.imgURL"
					:link="persona.link"
				/>
			</div>
		</div>
		<hr style="width: 95vw; border-color: white; margin-top: 5%">
	</div>

</template>

<style scoped>
.titolone{
	color: white;
	font-size: 4em;
	margin-left: 5%;
	margin-top: 5%;
}
.persone{
	display: grid;
	grid-template-columns: repeat(6, auto);
	gap: 3vw;
	width: fit-content;
	max-width: 90vw;
	margin-left: auto;
	margin-right: auto;
}
</style>
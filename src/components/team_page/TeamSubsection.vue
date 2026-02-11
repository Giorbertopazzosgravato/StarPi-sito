<script setup>
import CapoDipartimento from "@/components/team_page/CapoDipartimento.vue";
import PersonCard from "@/components/team_page/PersonCard.vue";

defineProps({
	nome_dipartimento: {
		type: String,
		default: "Giacomo e' fortissimo"
	},
	capoDipartimento:{
		imgURL: {
			type: String,
			default: new URL( "/aeso.png",import.meta.url).href
		},
		nome:{
			type: String,
			default: "Il boss finale di AESO"
		},
		quote: {
			type: String,
			default: "te lo metto in culo con le cache"
		},
		linkedin_link:{
			type: String,
			default: "https://www.linkedin.com/in/giacomo-consani-82a33a2b2/"
		}
	},
	persone: [{
		nome: {
			type: String,
			default: "The honoured one"
		},
		imgURL: {
			type: String,
			default: new URL("/evil_car.gif", import.meta.url).href
		},
		linkedin_link: {
			type: String,
			default: "https://www.linkedin.com/in/giacomo-consani-82a33a2b2/"
		}
	}]
})
</script>

<template>
	<div>

		<h1 class="titolone">{{nome_dipartimento}}</h1>
		<CapoDipartimento
			:nome="capoDipartimento.nome"
			:imgURL="capoDipartimento.imgURL"
			:quote="capoDipartimento.quote"
			:linkedin_link="capoDipartimento.linkedin_link"
		/>
		<div class="persone">
			<div v-for="persona in persone" :key="persona.nome">
				<PersonCard
					:nome="persona.nome"
					:imgURL="persona.imgURL"
					:linkedin_link="persona.linkedin_link"
				/>
			</div>
		</div>
		<hr style="width: 95vw; border-color: #FF6200; margin-top: 5%">
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
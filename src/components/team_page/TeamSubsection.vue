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
    font-family: 'Nasalization', sans-serif; /* Il tuo font */
    text-transform: uppercase;
    font-size: clamp(2rem, 8vw, 4.5rem); /* Si adatta tra 2rem e 4.5rem in base allo schermo */
    width: 90%;                         /* Evita che tocchi i bordi */
    margin: 0 auto;                     /* Lo centra */
    word-wrap: break-word;              /* Se la parola è troppo lunga, la taglia */
    overflow-wrap: break-word;
    line-height: 1.2;                   /* Evita che le righe si sovrappongano se va a capo */
    text-align: center;
}
.persone{
	display: flex;
    flex-direction: row;    /* Mette le card in riga */
    justify-content: center; /* Centra le card orizzontalmente */
    flex-wrap: wrap;        /* FONDAMENTALE: manda a capo se non c'è spazio */
    gap: 20px;              /* Spazio fisso e ordinato tra le card */
    width: 100%;
    margin-top: 30px;
    padding: 0 10%;         /* Opzionale: lascia un po' di margine ai lati */
}
</style>
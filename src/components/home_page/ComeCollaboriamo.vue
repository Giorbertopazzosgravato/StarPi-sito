<script setup>
import {onMounted, onUnmounted, reactive, ref} from "vue";
	console.log("(=^･ω･^=) <-mao")
	const card_template = reactive({
		title: "TITOLONE",
		descrizione: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		image_src: "/car.gif",
		width: "250px",
	});
	const cards = reactive([
		{
			title: "FLIGHT DYNAMICS",
			descrizione: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			image_src: new URL("../../assets/home_page/flight-dynamics-icon.png", import.meta.url).href,
			width: "250px",
		},
		{
			title: "AVIONICS",
			descrizione: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			image_src: new URL("../../assets/home_page/avionics-icon.png", import.meta.url).href,
			width: "250px",
		},
		{
			title: "PAYLOAD",
			descrizione: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			image_src: new URL("../../assets/home_page/payload-icon.png", import.meta.url).href,
			width: "250px",
		},
		{
			title: "RECOVERY SYSTEM",
			descrizione: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			image_src: new URL("../../assets/home_page/recovery-system-icon.png", import.meta.url).href,
			width: "250px",
		},
		{
			title: "PROPULSION",
			descrizione: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			image_src: new URL("../../assets/home_page/propulsion-icon.png", import.meta.url).href,
			width: "250px",
		},
		{
			title: "LOGISTICS & MARKETING",
			descrizione: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			image_src: new URL("../../assets/home_page/logistics-icon.png", import.meta.url).href,
			width: "250px",
		},
	]);

	const current_index = ref(4);
	const next_card = () =>{
		current_index.value = (current_index.value + 1) % cards.length;
	}
	let timer;
	onMounted(()=>{
		timer = setInterval(next_card, 1000);
	});
	onUnmounted(()=>{
		clearInterval(timer)
	})

</script>

<template>
<div class="container">
	<h1 class="primo_titolo">COME COLLABORIAMO</h1>
	<div class="card_container">
		<img :src="cards[current_index].image_src" alt="immagine" :width="cards[current_index].width" height="auto">
		<div class="text_container">
			<h1 class="titolone"><b>{{cards[current_index].title}}</b></h1>
			<p>{{cards[current_index].descrizione}}</p>
		</div>
	</div>
</div>
</template>
<script>

</script>

<style scoped>
.card_container{
	background-color: #29446E;
	border-radius: 24px;

	margin-left: auto;
	margin-right: auto;

	min-height: 30%;
	max-height: 30%;

	max-width: 50%;
	min-width: 40%;


	display: flex;
	align-items: center;
	gap: 5vw;
	flex-wrap: wrap;
	padding-top: 5%;
	padding-bottom: 5%;
	padding-left: 5%;
}
.text_container{
	left: auto;
	right: 10%;
	//flex: 1;
	min-width: 250px;
}
.container{
	color: white;
}
.primo_titolo{
	text-align: center;
}
.titolone{
	font-size: 3em;
}
p{
	max-width: 17em;
	font-size: 20px;
}
img	{
	max-width: 100%;
}
</style>
<script setup>
import { onMounted, onUnmounted, reactive, ref } from "vue";

// I feel like shit, I've basically vibe coded it all after fighting against css for 2 days straight.
// It looks so good tho, I can't deny it
// gemini in 3 minutes was able to do what I couldn't do in 2 days
// fuck my life
// oh well, this part will be rewritten and deleted as soon as we have a rocket anyways
// here's a cat:
console.log("(=^･ω･^=) <-mao")

const cards = reactive([
	{
		title: "FLIGHT DYNAMICS",
		descrizione: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		image_src: new URL("../../assets/home_page/flight-dynamics-icon.png", import.meta.url).href,
	},
	{
		title: "AVIONICS",
		descrizione: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		image_src: new URL("../../assets/home_page/avionics-icon.png", import.meta.url).href,
	},
	{
		title: "PAYLOAD",
		descrizione: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		image_src: new URL("../../assets/home_page/payload-icon.png", import.meta.url).href,
	},
	{
		title: "RECOVERY SYSTEM",
		descrizione: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		image_src: new URL("../../assets/home_page/recovery-system-icon.png", import.meta.url).href,
	},
	{
		title: "PROPULSION",
		descrizione: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		image_src: new URL("../../assets/home_page/propulsion-icon.png", import.meta.url).href,
	},
	{
		title: "LOGISTICS & MARKETING",
		descrizione: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		image_src: new URL("../../assets/home_page/logistics-icon.png", import.meta.url).href,
	},
]);

const current_index = ref(0);
const progress = ref(0);
const is_paused = ref(false);

// Duration in milliseconds
const duration = 6000;

let last_time;
let animation_frame;

const next_card = () => {
	current_index.value = (current_index.value + 1) % cards.length;
}

const animate = () => {
	const now = performance.now();

	if (!last_time) last_time = now;
	const delta = now - last_time;

	if (!is_paused.value) {
		const increment = (delta / duration) * 100;
		progress.value += increment;

		if (progress.value >= 100) {
			progress.value = 0;
			next_card();
		}
	}

	last_time = now;
	animation_frame = requestAnimationFrame(animate);
}

const pause_timer = () => {
	is_paused.value = true;
}

const resume_timer = () => {
	is_paused.value = false;
	last_time = performance.now();
}

onMounted(() => {
	last_time = performance.now();
	animation_frame = requestAnimationFrame(animate);
});

onUnmounted(() => {
	cancelAnimationFrame(animation_frame);
})
</script>

<template>
	<div class="container">
		<h1 class="primo_titolo">COME COLLABORIAMO</h1>

		<div class="card_container" @mouseenter="pause_timer" @mouseleave="resume_timer">

			<div class="progress-container">
				<div class="progress-bar" :style="{ width: progress + '%' }"></div>
			</div>

			<img :src="cards[current_index].image_src" alt="immagine" width="250px">

			<div class="text_container">
				<h1 class="titolone"><b>{{cards[current_index].title}}</b></h1>
				<p>{{cards[current_index].descrizione}}</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
.container {
	color: white;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.primo_titolo {
	text-align: center;
	margin-bottom: 2rem;
	font-size: 4em;
}

/* --- MAIN CONTAINER STYLES --- */
.card_container {
	/* FIXED DIMENSIONS */
	width: 50vw;
	height: 50vh;

	/* CENTERING CONTENT */
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4rem;

	/* VISUALS */
	background-color: #29446E;
	border-radius: 24px;
	position: relative;
	overflow: hidden;
	padding: 0 5%;

	/* INTERACTION */
	cursor: default;
}

/* --- LOAD BAR --- */
.progress-container {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 6px;
	background-color: rgba(0, 0, 0, 0.2);
}

.progress-bar {
	height: 100%;
	background-color: #4CC9F0; /* Change this to your preferred color */
	width: 0;
}

img {
	max-height: 80%;
	object-fit: contain;
	flex-shrink: 0; /* Prevents image from being squashed */
}

.text_container {
	flex: 1;
	max-width: 17em;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.titolone {
	font-size: 3em;
	margin: 0 0 1rem 0;
	line-height: 1.1;
}

p {
	font-size: 1.3em;
	line-height: 1.5;
	margin: 0;
	max-height: 10em;
	overflow: scroll;
}
p::-webkit-scrollbar{width: 10px; height: 50% }
p::-webkit-scrollbar-button{ display: none; }
p::-webkit-scrollbar-track{ display: none; }
p::-webkit-scrollbar-track-piece{ display: none; }
p::-webkit-scrollbar-thumb{ border-radius: 24px; background-color: rgba(0, 12, 38, 0.5); }
p::-webkit-scrollbar-corner{ color: red; }

</style>
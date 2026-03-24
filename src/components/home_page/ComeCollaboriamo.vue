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
		descrizione: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		image_src: new URL("/home_page/flight-dynamics-icon.png", import.meta.url).href,
	},
	{
		title: "AVIONICS",
		descrizione: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
		image_src: new URL("/home_page/avionics-icon.png", import.meta.url).href,
	},
	{
		title: "PAYLOAD",
		descrizione: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
		image_src: new URL("/home_page/payload-icon.png", import.meta.url).href,
	},
	{
		title: "RECOVERY SYSTEM",
		descrizione: "Lorem Ipsum is simply dummy text...",
		image_src: new URL("/home_page/recovery-system-icon.png", import.meta.url).href,
	},
	{
		title: "PROPULSION",
		descrizione: "Lorem Ipsum is simply dummy text of the printing...",
		image_src: new URL("/home_page/propulsion-icon.png", import.meta.url).href,
	},
	{
		title: "LOGISTICS & MARKETING",
		descrizione: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
		image_src: new URL("/home_page/logistics-icon.png", import.meta.url).href,
	}
]);

const current_index = ref(0);
const progress = ref(0);
const is_paused = ref(false);

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

const pause_timer = () => { is_paused.value = true; }
const resume_timer = () => { is_paused.value = false; last_time = performance.now(); }

onMounted(() => {
	last_time = performance.now();
	animation_frame = requestAnimationFrame(animate);
});

onUnmounted(() => {
	cancelAnimationFrame(animation_frame);
});
</script>

<template>
	<div class="container">
		<h1 class="primo_titolo">COME COLLABORIAMO</h1>

		<div class="card_container" @mouseenter="pause_timer" @mouseleave="resume_timer">
			<div class="progress-container">
				<div class="progress-bar" :style="{ width: progress + '%' }"></div>
			</div>

			<div class="image_wrapper">
				<img :src="cards[current_index].image_src" alt="icona dipartimento" class="dept-icon">
			</div>

			<div class="text_container">
				<h1 class="titolone"><b>{{cards[current_index].title}}</b></h1>
				<p class="descrizione">{{cards[current_index].descrizione}}</p>
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
	padding: 40px 0;
}

.primo_titolo {
	text-align: center;
	margin-bottom: 2rem;
	font-size: 3rem;
}

.card_container {
	width: 95%;
	max-width: 1000px;
	background-color: #1a1f2c; /* Stesso stile scuro delle NewsCard */
	border-radius: 40px;
	position: relative;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	box-shadow: 0 10px 30px rgba(0,0,0,0.3);
	cursor: default;
}

.progress-container {
	position: absolute;
	top: 0; left: 0;
	width: 100%; height: 6px;
	background-color: rgba(255, 255, 255, 0.1);
}

.progress-bar {
	height: 100%;
	background-color: #4CC9F0; 
	width: 0;
	transition: width 0.1s linear;
}

.image_wrapper {
	width: 100%;
	padding: 40px 20px 0 20px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.dept-icon {
	width: 150px;
	height: 150px;
	object-fit: contain;
}

.text_container {
	padding: 30px;
	text-align: center;
}

.titolone {
	font-size: 2rem;
	margin: 0 0 15px 0;
	line-height: 1.2;
}

.descrizione {
	font-size: 1.1rem;
	line-height: 1.5;
	color: #ccc;
	margin: 0;
}

@media (min-width: 850px) {
	.primo_titolo { font-size: 4rem; }
	.card_container {
		flex-direction: row;
		min-height: 400px;
		border-radius: 50px;
	}
	.image_wrapper {
		width: 40%;
		padding: 40px;
	}
	.dept-icon { width: 250px; height: 250px; }
	.text_container {
		width: 60%;
		padding: 40px 60px 40px 20px;
		text-align: left;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.titolone { font-size: 3rem; }
}
</style>
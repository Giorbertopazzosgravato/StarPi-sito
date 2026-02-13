<script setup>
const props = defineProps({
	anno: {
		type: String,
		default: "2026"
	}
})
function changeContent(){
	console.log("mao")
	let element = document.getElementById("content" + props.anno);
	if (element.style.display === "none"){
		element.style.display = "";
	} else{
		element.style.display="none";
	}
}

</script>

<template>
<div class="annataContainer" @click="changeContent">
	<h1>V            {{anno}}             V</h1>
</div>
	<div :id="'content' + anno">
		<slot></slot>
	</div>
</template>

<style scoped>
.annataContainer{
	width: 100%;
	background-color: #0E0727;
	color: #FF6200;
	text-align: center;
}
</style>
<script setup>

import NavBarOption from "@/components/common/NavBarOption.vue";
import {ref} from "vue";

function activate_other_page(index){
	console.log(index)
	// non ho voglia di scrivere del buon codice
	for (const option of navBarOptions.value){
		option.isActive = false;
	}
	navBarOptions.value[index].isActive = true;
}
function navBarOption(title, link, isActive){
	return {
		title,
		link,
		isActive
	}
}
const navBarOptions = ref([
		new navBarOption("HOME", "/home", true),
		new navBarOption("NEWS", "/news", false),
		new navBarOption("PROGETTI", "/progetti", false),
		new navBarOption("TEAM", "/team", false),
		new navBarOption("DIPARTIMENTI", "/", false),
		new navBarOption("GALLERIA", "/", false),
	])
</script>

<template>
	<div class="NavBarWrapper">
		<div v-for="(option, index) in navBarOptions" :key="option.title">
			<RouterLink :to="{ path:option.link }">
				<NavBarOption :title = option.title :isActive=option.isActive @click="activate_other_page(index)"/>
			</RouterLink>
		</div>
	</div>

</template>

<style scoped>
	.NavBarWrapper{
		position: fixed;
		width: 100%;
		top: 0;
		display: flex;
		background-color: #213152;
		height: max-content;
		z-index: 9999;
	}
	div a{
		text-decoration: none;
	}
</style>
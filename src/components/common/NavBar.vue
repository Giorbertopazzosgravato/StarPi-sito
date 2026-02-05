<script setup>

import NavBarOption from "@/components/common/NavBarOption.vue";
</script>

<template>
	<div class="NavBarWrapper">
		<RouterLink to="/home"><NavBarOption title="HOME" :isActive=true /></RouterLink>
		<RouterLink to="/news"><NavBarOption title="NEWS" :isActive=false /></RouterLink>
		<RouterLink to=""><NavBarOption title="PROGETTI" :isActive=false /></RouterLink>
		<RouterLink to="/team"><NavBarOption title="TEAM" :isActive=false /></RouterLink>
		<RouterLink to="https://www.google.com"><NavBarOption title="DIPARTIMENTI" :isActive=false /></RouterLink>
		<RouterLink to="https://www.google.com"><NavBarOption title="GALLERIA" :isActive=false /></RouterLink>
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
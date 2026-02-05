<script setup>

import NavBarOption from "@/components/common/NavBarOption.vue";
</script>

<template>
	<div class="navBarContainer">
		<RouterLink to="https://www.google.com"><NavBarOption title="HOME" :isActive=true /></RouterLink>
		<RouterLink to="https://www.google.com"><NavBarOption title="NEWS" :isActive=false /></RouterLink>
		<RouterLink to="https://www.google.com"><NavBarOption title="PROGETTI" :isActive=false /></RouterLink>
		<RouterLink to="https://www.google.com"><NavBarOption title="TEAM" :isActive=false /></RouterLink>
		<RouterLink to="https://www.google.com"><NavBarOption title="DIPARTIMENTI" :isActive=false /></RouterLink>
		<RouterLink to="https://www.google.com"><NavBarOption title="GALLERIA" :isActive=false /></RouterLink>
	</div>

</template>

<style scoped>
	.navBarContainer{
		position: fixed;
		top: 0;
		display: flex;
		background-color: #213152;
		height: max-content;
		width: 100%;
		z-index: 99999;
	}
</style>
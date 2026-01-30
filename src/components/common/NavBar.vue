<script setup>

import NavBarOption from "@/components/common/NavBarOption.vue";
</script>

<template>
	<div>
		<NavBarOption title="HOME" :isActive=true />
		<NavBarOption title="NEWS" :isActive=false />
		<NavBarOption title="PROGETTI" :isActive=false />
		<NavBarOption title="TEAM" :isActive=false />
		<NavBarOption title="DIPARTIMENTI" :isActive=false />
		<NavBarOption title="GALLERIA" :isActive=false />
	</div>

</template>

<style scoped>
	div{
		position: sticky;
		top: 0;
		display: flex;
		background-color: #213152;
		height: max-content;
		z-index: 9999;
	}
</style>
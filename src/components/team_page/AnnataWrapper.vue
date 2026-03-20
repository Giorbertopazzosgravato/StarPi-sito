<script setup>
const props = defineProps({
	anno: {
		type: String,
		default: "2026"
	}
})

</script>

<template>
	<div :id="'content' + anno">
		<slot></slot>
	</div>
</template>

<style scoped>

</style>
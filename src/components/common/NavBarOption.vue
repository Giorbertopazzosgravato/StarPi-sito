<script setup>
	defineProps({
		title:{
			type: String,
			default: "Titolo",
		},
		isActive:{
			type: Boolean,
			default: false,
		}
	});
</script>

<template>
	<div :class="{active: isActive, default: !isActive}">
		{{title}}
	</div>
</template>

<style scoped>
	div{
		border-top: 9px solid #DCA74B;
		max-width: fit-content;
		font-size: 40px;
		font-family: Calibri,serif;
		color: #FFFFFF;
		background-color: #213152;
		padding-left: 10px;
		padding-right: 10px;
		margin-right: 7px;
		border-bottom: 9px solid transparent;
	}
	.default:hover{
		background-color: rgba(45, 76, 122, 0.2);
		border-top: 9px solid #E16038;
		border-bottom: 9px solid #E16038;
	}
	.active{
		border-top: 9px solid #C82334;
		background-color: #29446E;
	}
</style>
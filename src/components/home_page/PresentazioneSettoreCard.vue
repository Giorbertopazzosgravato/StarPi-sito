<script setup>

</script>

<template>
	<div class="presentazioneSettoreContainer">
		<div class="image_container">
			<slot name="image">
				<img src="/car.gif" alt="nessuna immagine passata">
			</slot>
		</div>
		<div class="text_container">
			<h1><b><slot name="titolo"></slot></b></h1>
			<p><slot name="descrizione"></slot></p>
		</div>
	</div>

</template>

<style scoped>
	.presentazioneSettoreContainer{
		left: 10%;
		background-color: #29446E;
		border-radius: 24px;
		height: fit-content;
		width: fit-content;
		display: flex;
		padding-top: 5%;
		padding-bottom: 5%;
		margin-bottom: 15%;
	}

	.image_container{
		display: block;

		margin-bottom: auto;
		margin-top: auto;
		margin-left: 3vw;

		align-items: center;
		justify-content: center;
	}
	.text_container{
		//position: absolute;
		margin-left: auto;
		margin-right: 3vw;
		display: block;
	}
	p{
		background-color: #C82334;
		width: 20vw;
		font-size: 20px;
	}
	h1{
		font-size: 32px;
	}
	/*img	{

		object-fit: cover;
		object-position: center;
		flex-shrink: 0;
	}*/

</style>
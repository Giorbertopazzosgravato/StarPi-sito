<!--<script setup>-->

<!--</script>-->

<!--<template>-->
<!--	<div class="container">-->
<!--		<slot name="image" >-->
<!--			<img src="/car.gif" alt="nessuna immagine passata">-->
<!--		</slot>-->
<!--		<div class="second">-->
<!--			<h1><b><slot name="titolo"></slot></b></h1>-->
<!--			<p><slot name="descrizione"></slot></p>-->
<!--		</div>-->
<!--	</div>-->

<!--</template>-->

<!--<style scoped>-->
<!--	.container{-->
<!--		position: relative;-->
<!--		padding-left: 10vw;-->
<!--		background-color: #29446E;-->
<!--		border-radius: 24px;-->
<!--		height: 50vh;-->
<!--		width: 70vw;-->
<!--		display: flex;-->
<!--		//overflow: hidden;-->
<!--	}-->
<!--	h1{-->

<!--	}-->
<!--	p{-->
<!--		width: 30vw;-->
<!--	}-->
<!--	img{-->
<!--		height: 50%;-->
<!--		width: 50%;-->
<!--	}-->
<!--	.second{-->
<!--		margin-left: 10vw;-->
<!--	}-->
<!--</style>-->


<template>
	<div class="card-container">
		<div class="image-wrapper">
			<slot name="image">
				<img src="/car.gif" alt="placeholder">
			</slot>
		</div>
		<div class="content">
			<h1><slot name="titolo">FLIGHT DYNAMICS</slot></h1>
			<p><slot name="descrizione">Lorem Ipsum is simply dummy text...</slot></p>
		</div>
	</div>
</template>

<style scoped>
.card-container {
	position: relative; /* Essential: This acts as the anchor for the absolute image */
	background-color: #29446E;
	border-radius: 24px;
	height: 300px; /* Fixed height is often safer than vh for cards */
	width: 800px;
	display: flex;
	align-items: center; /* Centers the text content vertically */
	padding-left: 250px; /* Makes room for the absolute image on the left */
	margin-left: 100px; /* Moves the whole card away from the screen edge */
}

.image-wrapper {
	position: absolute;
	left: -50px; /* This "detaches" it and moves it outside the container to the left */
	top: 0;
	bottom: 0;
	width: 200px;
	background-color: #ebf0f5; /* Light grey background from your image */
	display: flex;
	justify-content: center;
	align-items: center;
}

.image-wrapper img {
	max-width: 100%;
	height: auto;
}

.content {
	color: white;
	font-family: sans-serif;
}

h1 {
	margin: 0 0 10px 0;
	font-size: 2rem;
}

p {
	max-width: 400px;
	line-height: 1.5;
}
</style>
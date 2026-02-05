<script setup>

</script>

<template>
	<div class="IscrizioneContainer">
		<div class="TitoloContainer">
			<div class="FirstRow">
				<img src="../../assets/news_page/critical signal.png" alt="critical"/>
				<h1 class="messaggioCritico">MESSAGGIO CRITICO PER L'UTENTE</h1>
				<img src="../../assets/news_page/critical signal.png" alt="critical"/>
			</div>
			<h2 class="habemusNewsletter">Abbiamo una newsletter! Cosa aspetti ad iscriverti?</h2>
		</div>
		<form action="" class="form" method="post" >
			<div>
				<input type="text" name="nome" id="nome" class="input txt" placeholder="come ti chiami?">
				<input type="email" name="e-mail" id="email" class="input txt" placeholder="inserisci la tua e-mail!">
				<button type="submit" class="input btn"><b>ENTRA NEL GROUND CREW</b>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="44"
						height="44"
					>
						<path fill="none" d="M0 0h24v24H0z"></path>
						<path
							fill="currentColor"
							d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
						></path>
					</svg>
				</button>
			</div>
		</form>
	</div>
</template>

<style scoped>
.IscrizioneContainer{
	width: 80vw;
	height: 45vh;
	padding-bottom: 2%;
	min-height: fit-content;
	background-color: rgba(5, 9, 15, 0.5);
	border-radius: 24px;
	color: white;
	margin-left: auto;
	margin-right: auto;

}
.TitoloContainer{
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	gap: 5vw;
}
.FirstRow{
	width: 100%;
	display: flex;
	justify-content: center;
}
img{
	margin-top: 2vh;
	height: 15vh;
	width: auto;
}
.messaggioCritico{
	font-size: 3.5em;
}
.habemusNewsletter{
	font-size: 2.5em;
	margin-top: -8%
}
.input{
	display: block;
	margin-left: auto;
	margin-right: auto;
	font-size: 1.3em;
	border-radius: 10px;
	border: solid #E16038;
	background-color: #B8B8B8;
}
.txt{
	font-size: 1.7em;
	width: 80%;
	height: 5vh;
	margin-bottom: 2vh;
}
.btn{
	color: white;
	background-color: rgba(225, 96, 56, 0.32);
	font-size: 2.5em;
}

.form{
	width: 80%;
	margin-left: auto;
	margin-right: auto;
}
</style>
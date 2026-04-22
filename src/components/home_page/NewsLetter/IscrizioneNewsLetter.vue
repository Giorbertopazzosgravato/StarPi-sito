<script setup>

</script>

<template>
	<form action="/IscrizioneGiornale" class="container" method="post">
		<h1>Ti piace quello che vedi?<br>Iscriviti alla newsletter!</h1>
		<div>
			<input type="text" name="nome" id="nome" class="input txt" placeholder="nome">
			<input type="email" name="e-mail" id="email" class="input txt" placeholder="e-mail">
			<button type="submit" class="input btn">Iscrivimi!
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="24"
					height="24"
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
</template>

<style scoped>
.container {
    color: white;
    margin-left: auto;
    margin-right: auto;
    width: 100%; /* Cambiato da fit-content per permettere il centraggio del testo */
    max-width: 1200px; /* Evita che diventi troppo largo su schermi giganti */
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center; /* Centra tutto il contenuto testuale */
}

h1 {
    font-family: 'Nasalization', sans-serif; /* Applichiamo il tuo nuovo font */
    text-transform: uppercase;
    margin-top: 20px; 
    margin-bottom: 30px;
    font-size: 2.5rem; /* Usare rem/em è meglio per la responsività rispetto a vh/vw */
    width: 90%; /* Diamo un po' di respiro ai lati */
    line-height: 1.2;
}

div {
    background-color: rgba(28, 42, 106, 0.57);
    padding: 40px 20px;
    border-radius: 40px;
    width: 80%;
    max-width: 600px; /* Impedisce al form di diventare troppo largo */
    margin: 0 auto;
}

.input {
    display: block;
    margin: 0 auto 20px auto; /* Centra gli input e aggiunge spazio sotto */
    font-family: 'Inter', sans-serif; /* Usiamo Inter per gli input */
    font-size: 1.1rem;
    padding: 10px 15px;
    border-radius: 10px;
    border: 2px solid #E04814;
    background-color: #B8B8B8;
    width: 90%;
}

.btn {
    width: auto;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 25px;
    background: #0F1B31;
    color: white;
    transition: transform 0.2s;
}

.btn:hover {
	background-color: #E04814;
    transform: scale(1.05);
}
</style>
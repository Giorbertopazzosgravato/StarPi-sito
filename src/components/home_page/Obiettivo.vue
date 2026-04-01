<script setup>

</script>

<template>
    <div class="container">
        <div class="text-content">
            <h1><b>IL NOSTRO OBIETTIVO</b></h1>
            <p>
				In StarPi non ci accontentiamo di studiare l'aerospazio sui libri; abbiamo deciso di costruirlo. Siamo un gruppo di studenti dell’Università di Pisa che ha scelto di trasformare la teoria in metallo, fibra di carbonio e propellente. La nostra missione non finisce tra le mura di un laboratorio: punta dritta ai cieli del Portogallo per la European Rocketry Challenge (EuRoC).
				<br>
				<br>Progettare un razzo significa far dialogare discipline diverse — dall'elettronica di bordo alla fluidodinamica, dalla meccanica strutturale alla logistica — con un unico margine di errore: lo zero. Ogni vite che stringiamo e ogni riga di codice che scriviamo è un tassello di una sfida collettiva che ci spinge a superare i nostri limiti come futuri ingegneri e come team.
				<br>
				<br>Non stiamo solo partecipando a una competizione; stiamo dimostrando che l’eccellenza pisana può lasciare il segno anche ad alta quota. Il nostro obiettivo è lanciare un’idea, vederla bruciare sulla rampa e recuperarla pronta per la sfida successiva.
            </p>
        </div>

        <img src="/home_page/team_image.jpeg" alt="team" class="objective-img"/>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        align-items: flex-start;
        color: white;
        margin-top: 5vh;
        padding: 0 10vw;
        font-family: Calibri, sans-serif;
    }

    .text-content {
        flex: 1;
    }

    h1 {
        font-size: 4.5rem;
        margin-bottom: 2rem;
		margin-top: 0;
    }

    p {
        max-width: 45vw;
        font-size: 20px;
        line-height: 1.6;
        text-align: justify;
    }

    .objective-img {
        width: 500px;
        height: auto; 
        margin-top: 2vh;
        margin-left: 5vw; 
        border-radius: 8px; 
        object-fit: cover;
    }

    @media (max-width: 1024px) {
        .container {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        p {
            max-width: 100%;
        }
        .objective-img {
            margin-left: 0;
            margin-top: 4vh;
            width: 80%;
        }
    }
</style>
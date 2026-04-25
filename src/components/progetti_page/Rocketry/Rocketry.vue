<script setup>
import Obiettivo from "@/components/home_page/Obiettivo.vue";
import Gradiente_Homepage from "@/assets/home_page/Gradiente_Homepage.vue";
</script>

<template>
  <div class="page-container">
    <div class="header-logo-container">
      <img
          src="/progetti_page/progetti_logo.png"
          alt="StarPi Progetti"
          class="top-logo"
      >
    </div>

    <hr class="separator">

    <Obiettivo
        titolo="IL NOSTRO OBIETTIVO"
        immagine="/home_page/team_image.jpeg"
    >
      In StarPi non ci accontentiamo di studiare l'aerospazio sui libri; abbiamo deciso di costruirlo. Siamo un gruppo di studenti dell’Università di Pisa che ha scelto di trasformare la teoria in metallo, fibra di carbonio e propellente. La nostra missione non finisce tra le mura di un laboratorio: punta dritta ai cieli del Portogallo per la European Rocketry Challenge (EuRoC).
      <br><br>
      Progettare un razzo significa far dialogare discipline diverse — dall'elettronica di bordo alla fluidodinamica, dalla meccanica strutturale alla logistica — con un unico margine di errore: lo zero. Ogni vite che stringiamo e ogni riga di codice che scriviamo è un tassello di una sfida collettiva che ci spinge a superare i nostri limiti come futuri ingegneri e come team.
      <br><br>
      Non stiamo solo partecipando a una competizione; stiamo dimostrando che l’eccellenza pisana può lasciare il segno anche ad alta quota. Il nostro obiettivo è lanciare un’idea, vederla bruciare sulla rampa e recuperarla pronta per la sfida successiva.
    </Obiettivo>

  </div>
</template>

<style scoped>
.page-container {
  background: linear-gradient(#29446E 0%, #152845 100%);
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding-bottom: 30px; /* Ridotto per non far scendere troppo il footer */
}

.header-logo-container { width: 100%; line-height: 0; }
.top-logo { width: 100%; max-width: 100%; height: auto; display: block; }

.separator {
  width: 95%; /* Coesione con NewsPage */
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  margin: 10px auto 15px auto; /* Coesione con NewsPage */
}

.projects-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  width: 90%;
  max-width: 1400px;
  margin: 10px auto 0 auto;
}

@media (max-width: 1200px) {
  .projects-grid { gap: 20px; }
}
</style>
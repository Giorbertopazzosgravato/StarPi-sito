<script setup>
</script>
<template>
  <div class="newsletter-box">
    <div class="newsletter-header">
      <div class="alert-row">
        <img src="/news_page/critical%20signal.png" alt="alert" class="alert-icon" />
        <h2 class="alert-text">MESSAGGIO CRITICO PER L'UTENTE</h2>
        <img src="/news_page/critical%20signal.png" alt="alert" class="alert-icon" />
      </div>
      <p class="newsletter-sub">Abbiamo una newsletter! Cosa aspetti ad iscriverti?</p>
    </div>

    <form action="/IscrizioneGiornale" class="newsletter-form" @submit.prevent>
      <input type="text" placeholder="Come ti chiami?" class="n-input" />
      <input type="email" placeholder="Inserisci la tua e-mail!" class="n-input" />
      <button type="submit" class="n-btn">
        <b>ENTRA NEL GROUND CREW</b>
      </button>
    </form>
  </div>
</template>

<style scoped>
.newsletter-box {
  width: 100%; 
  max-width: none;
  margin: 0; 
  padding: 40px 20px;
  /* Gradiente schiarito: colori base più alti e opacità ridotta */
  background: linear-gradient(180deg, rgba(23, 182, 210, 0.25) 0%, rgba(12, 64, 135, 0.5) 100%);
  border-radius: 40px;
  text-align: center;
  color: white;
  box-sizing: border-box;
}

.alert-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.alert-icon { height: 40px; }
.alert-text { font-size: 1.5rem; margin: 0; font-weight: bold; }
.newsletter-sub { font-size: 1.1rem; margin: 20px 0; color: #ddd; }

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 500px;
  margin: 0 auto;
}

.n-input {
  padding: 15px;
  border-radius: 12px;
  border: 2px solid #E04814;
  background: #B8B8B8;
  font-size: 1rem;
}

.n-btn {
  padding: 15px;
  background-color: #E04814;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background 0.3s;
}

.n-btn:hover { background-color: #f36d3c; }

@media (min-width: 850px) {
  .newsletter-box { border-radius: 50px; }
  .alert-icon { height: 60px; }
  .alert-text { font-size: 2.5rem; }
}
</style>
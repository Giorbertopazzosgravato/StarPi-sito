<script setup>
</script>

<template>
  <div class="header-section">
    <div class="header-logo-container">
      <img src="/home_page/background_logo_home_page.png" alt="logo" class="top-logo">
    </div>

    <hr class="separator">

    <div class="slogan-container">
      <p class="slogan-text">
        We are proud to present the student team, founded in 2024 in Pisa, which designs,<br>
        manufactures and tests rocket models to compete in EuRoC.
      </p>
    </div>
  </div>
</template>

<style scoped>
.header-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header-logo-container { 
  width: 100%; 
  line-height: 0; 
}

.top-logo { 
  width: 100%; 
  max-width: 100%; 
  height: auto; 
  display: block; 
}

.separator {
  width: 95%;
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  margin: 10px auto 20px auto;
}

/* Stili per il testo */
.slogan-container {
  width: 95%;
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.slogan-text {
  text-align: center;
  color: #FFFFFF;
  font-family: 'Calibri', sans-serif;
  font-size: 1.5rem;
  line-height: 1.5;
  margin: 0;
}

@media (min-width: 850px) {
  .slogan-text { font-size: 2rem; }
}
</style>
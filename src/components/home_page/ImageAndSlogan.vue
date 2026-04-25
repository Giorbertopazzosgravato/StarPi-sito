<template>
  <div class="slo-header">
    <div class="slo-logo-box">
      <img src="/home_page/background_logo_home_page.png" alt="logo" class="slo-img">
    </div>
    <hr class="slo-line">
    <div class="slo-content">
      <p class="slo-text">
        Siamo orgogliosi di presentare il team studentesco, fondato nel 2024 a Pisa, che progetta,<br>
        produce e testa modelli di razzi per competere in EuRoC.
      </p>
    </div>
  </div>
</template>

<style scoped>
.slo-header { width: 100%; display: flex; flex-direction: column; align-items: center; }
.slo-logo-box { width: 100%; line-height: 0; }
.slo-img { width: 100%; height: auto; display: block; }
.slo-line { width: 95%; border: 0.5px solid rgba(255, 255, 255, 0.1); margin: 10px auto 20px auto; }
.slo-content { width: 95%; max-width: 1200px; margin: 20px auto; padding: 0 20px; }
.slo-text { text-align: center; color: #FFFFFF; font-family: 'Calibri', sans-serif; font-size: 1.2rem; line-height: 1.5; margin: 0; }

@media (min-width: 850px) {
  .slo-text { font-size: 2rem; }
}
</style>
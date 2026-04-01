<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const y = ref(0)
let animationId = null
let intervalId = null

function animate() {
  animationId = requestAnimationFrame(animate);
}

onMounted(() => {
  y.value = window.innerHeight - 900

  intervalId = setInterval(() => {
    const slider = document.getElementById("putenza")
    if (slider) {
      console.log("Valore slider:", slider.value)
    }
  }, 1000);
  animate()
})


onUnmounted(() => {
  cancelAnimationFrame(animationId)
  clearInterval(intervalId)
})
</script>

<template>
  <div class="contact-page">
    <div class="contact-grid">
      <div class="info-section">
        <div class="contact-card">
          <h3 class="nasalization-font">Richieste Commerciali</h3>
          <a href="mailto:it@starpi.eu" class="email-link">it@starpi.eu</a>
        </div>
        <div class="social-links">
          </div>
      </div>

      <div class="form-section">
        <IscrizioneNewsLetter title="Inviaci un messaggio diretto" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  padding: 50px 10%;
  color: white;
  text-align: center;
}

.contact-grid {
  display: center;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-top: 40px;
}

.contact-card {
    background: rgba(255, 255, 255, 0.05); /* Lo sfondo scuro che già hai */
    border-left: 4px solid #E04814;
    border-radius: 15px;
    width: 300px;
    margin: 40px auto;     
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 20px;  
}

.email-link {
  color: #E04814;
  font-weight: bold;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
}

@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; }
}
</style>
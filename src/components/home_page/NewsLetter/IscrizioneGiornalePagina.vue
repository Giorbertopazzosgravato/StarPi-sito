<script setup>
  import { ref, onMounted } from 'vue'

  const y = ref(0)              // vertical position
  const countdown = ref(9)      // seconds
  const isMoving = ref(false)

  function sleep(ms) {
    return new Promise(r => setTimeout(r, ms))
  }

  async function startSequence() {
    // countdown phase
    while (countdown.value > 0) {
      await sleep(1000)
      countdown.value--
    }

    // start movement
    isMoving.value = true
    momento = -1;
    animate()
  }
  let momento = 1;
  function animate() {
    if (y.value < window.innerHeight) {
      y.value += momento;
      momento -= 0.1;
      requestAnimationFrame(animate)
    }
  }

  onMounted(() => {
    // start at bottom
    y.value = window.innerHeight/2.25

    startSequence()
  })
</script>

<template>

  <br>
  <br>
  <br>
  <br>
  <br>
  <br>

  <meta http-equiv="refresh" content="13;url=/">



  <div class="container">
    <div style="text-align: center; color: antiquewhite">
      <h1>
        ! Grazie per esserti iscritto al giornale !
      </h1>
      <h1>
        Da questo momento sarai aggiornato delle ultime novità via mail
      </h1>
      <h3>
        Il server stà processando la richiesta
      </h3>
      <br>
      <br>
      <div style="text-align: center">
        <router-link to="/home" style="color: #FF6200"> torna alla pagina principale </router-link>
      </div>
    </div>

    <!-- countdown display -->
    <div class="countdown">
      <h1> {{ countdown }} </h1>
    </div>

    <!-- image -->
    <img
        src="/Giornale/Razzo.png"
        class="razzo"
        :style="{ transform: `translateY(${y}px)` }"
    />
    <img
        v-if="isMoving"
        src="/Giornale/Fuoco.png"
        class="fuoco"
        :style="{ transform: `translateY(${y+70}px)` }"
    />

  </div>



</template>

<style scoped>
.container {
  position: relative;
  height: 70vh;

}

.razzo {
  position: relative;
  bottom: 0;
  left: 10%;
  scale:30%;
  transform: translateX(0%);
}

.fuoco {
  position: absolute;
  bottom: 0;
  left: 13%;
  scale:30%;
  transform: translateX(-33%);
}

.countdown {
  text-align: center;
  font-size: 40px;
}
</style>
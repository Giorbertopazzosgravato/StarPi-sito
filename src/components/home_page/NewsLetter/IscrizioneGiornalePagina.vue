<script setup>
  import { ref, onMounted } from 'vue'

  const y = ref(0)              // vertical position
  const countdown = ref(10)      // seconds
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
    animate()
  }

  function animate() {
    if (y.value > -window.innerHeight + 10) {
      y.value -= 3 // move up
      requestAnimationFrame(animate)
    }
  }

  onMounted(() => {
    // start at bottom
    y.value = -window.innerHeight/50

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

  <meta http-equiv="refresh" content="12;url=/">



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
        :style="{ transform: `translateY(${y-50}px)` }"
    />
    <img
        v-if="isMoving"
        src="/Giornale/Fuoco.png"
        class="fuoco"
        :style="{ transform: `translateY(${y}px)` }"
    />

  </div>



</template>

<style scoped>
.container {
  position: relative;
  height: 70vh;
  overflow: hidden;
}

.razzo {
  position: absolute;
  bottom: 0;
  left: 10%;
  transform: translateX(+30%);
}

.fuoco {
  position: absolute;
  bottom: 0;
  left: 13%;
  transform: translateX(0%);
}

.countdown {
  text-align: center;
  font-size: 40px;
}
</style>
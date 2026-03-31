<script setup>
  import { ref, onMounted } from 'vue'

  const y = ref(0)              // vertical position


    function sleep(ms) {
      return new Promise(r => setTimeout(r, ms))
    }

    async function startSequence() {
      // countdown phase
      animate()
    }

    function animate() {
      console.log(slide.value);
      y.value -= slide.value
      if(y.value >= window.innerHeight - 900) {
        y.value -= 2;
      }
      if (y.value > -window.innerHeight + 10) {
        window.location.replace("/");
      }
      requestAnimationFrame(animate);
    }

    onMounted(() => {
      // start at bottom
      y.value = window.innerHeight - 900


      while(true) {
        const slider = document.getElementById("putenza")
        console.log(slider.value)

        sleep(1000);
      }

      startSequence()
    })





</script>

<template>
  <br>
  <br>
  <br>
  <br>
  <br>





  <div>
    <div style="text-align: center">
      <h1> Ma che stai a di fra no davvero FR la pagina un c'è </h1>
      <h2 > →→    trascina per tornare alla home   →→ </h2>
      <input type="range" id="putenza" name="putenza" min="0" max="10" value="0" />
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <router-link to="/home" style="color: #FF6200"> clicca qui per tornare alla pagina principale </router-link>
    </div>

  </div>




  <div>
    <img
        src="/Giornale/Razzo.png"
        class="img"
        :style="{ transform: `translateY(${y-55}px)` }"
    />
  </div>



  </template>



  <style scoped>
  </style>
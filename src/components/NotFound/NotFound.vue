<script setup>
import { ref, onMounted } from 'vue'
import background from "three/src/renderers/common/Background.js";

const y = ref(0)
const slide = ref(null)

let momento = 0;
function animate() {
  const value = Number(slide.value?.value || 0)
  console.log("M : " + momento)
 console.log("Y : " + y.value);

  momento += 0.3 - (value)*0.034;

  if (y.value >= (window.innerHeight/2.25)) {
    if(momento > 0) {
      momento = 0;
      y.value = (window.innerHeight/2.25);
    }
  }


  y.value += momento;

  if (y.value < ((-window.innerHeight*1.2))) {
    window.location.replace("/")
    console.log("Vai via")
  }

  requestAnimationFrame(animate)
}

onMounted(() => {
  y.value = window.innerHeight/2.25
  animate()
})
</script>





<template>
  <br>
  <br>
  <br>
  <br>
  <br>





  <div>
    <div style="text-align: center; color: aliceblue;">
      <!--
      <h1> Ma che stai a di fra no davvero FR la pagina un c'è </h1>
      -->
      <h1 style="font-size: 7ex"> Impossibile trovare la pagina richiesta </h1>
      <h2 > →→    trascina per tornare alla home   →→ </h2>
      <input ref="slide" type="range" min="0" max="10" value="0" />
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <router-link to="/home" style="color: #FF6200; font-size: 3ex"> Oppure clicca qui per tornare alla pagina principale </router-link>
    </div>
  </div>


  <div>
    <img
        src="/Giornale/Razzo.png"
        class="img"
        :style="{ transform: `translateY(${y}px)` }"
    />
  </div>


</template>

<style scoped>
  .img {
    scale: 45%;
  }

  .terreno {
    width: 100%;
    height: 10%;
    background-color: darkgreen;
  }
</style>
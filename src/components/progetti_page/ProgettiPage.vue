<script setup>
import { TresCanvas } from '@tresjs/core'

</script>

<template>
	<br>
	<br>
	<br>
	<br>
	<br>
	<h1>QUESTA PAGINA E' ANCORA WORK-IN-PROGRESS</h1>
	<p>(non abbiamo progetti da farvi vedere, ci stiamo lavorando)</p>


  <TresCanvas>
    <TresPerspectiveCamera />
     <TresMesh :position="[0, 0, 0]">
        <TresBoxGeometry/>
        <TresMeshNormalMaterial />
     </TresMesh>
     <TresAxesHelper/>

  </TresCanvas>

  <p id="demo"></p>
</template>



<style scoped>
 html, body, #app {
   height: 100%;
   margin: 0;
   padding: 0;
   width: 100%;
 }
</style>
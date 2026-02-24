<script setup>
function getSponsorLogos() {
  // TODO: Fetch sponsor logos from backend API
  return [];
}
</script>

<link
  rel="stylesheet"
  href="https://fontshttps://fonts.googleapis.com/css2?family=Inter"
/>

<template>
  <div class="footer">
    <!-- Sponsors -->
    <div>
      <div class="sponsor-headline-wrapper">
        <h2 class="sponsor-headline">I NOSTRI SPONSOR</h2>
      </div>
      <div class="sponsor-logos">
        <img v-for="logo in getSponsorLogos()" :src="logo" />
      </div>
    </div>
  </div>
</template>

<style scoped>
div {
  width: 100%;
}

h2 {
  font-family: "Inter", sans-serif;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sponsor-headline-wrapper {
  background-color: #000000;
}

.sponsor-headline {
  color: #b2b2b2;
  text-align: center;
}
</style>

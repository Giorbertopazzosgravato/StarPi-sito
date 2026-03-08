<script setup>
import SponsorLogo from "@/components/common/SponsorLogo.vue";

const sponsors = [
  {
    src: "../../../static-assets/images/logo-dewesoft.svg",
    alt: "Logo Dewesoft",
  },
  {
    src: "../../../static-assets/images/logo-nlcomp.svg",
    alt: "Logo NLComp",
  },
  {
    src: "../../../static-assets/images/logo-unipi.svg",
    alt: "Logo UniPi",
  },
  {
    src: "../../../static-assets/images/logo-crm.svg",
    alt: "Logo CRM",
  },
  {
    src: "../../../static-assets/images/logo-ansys.svg",
    alt: "Logo Ansys",
  },
  {
    src: "../../../static-assets/images/logo-aisler.svg",
    alt: "Logo Aisler",
  },
  {
    src: "../../../static-assets/images/logo-euroavia.svg",
    alt: "Logo Euroavia",
  },
  {
    src: "../../../static-assets/images/logo-bluetti-cropped.png",
    alt: "Logo Bluetti",
  },
];
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
        <SponsorLogo
          v-for="sponsor in sponsors"
          :src="sponsor.src"
          :alt="sponsor.alt"
        />
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
  /* TODO: forse è meglio relativo */
  font-size: 64px;
}

.sponsor-logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /*TODO: Idem */
  gap: 120px 100px;
}

.sponsor-logos img {
  max-height: 6em;
  object-fit: contain;
}
</style>

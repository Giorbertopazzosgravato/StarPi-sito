<script setup>
import Logo from "@/components/common/Logo.vue";

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
      <h2 class="sponsor-headline">I NOSTRI SPONSOR</h2>
      <div class="sponsor-logos">
        <Logo
          v-for="sponsor in sponsors"
          :src="sponsor.src"
          :alt="sponsor.alt"
        />
      </div>
    </div>
    <div class="page-ending">
      <h3>Interested? Here's our socials:</h3>
    </div>
  </div>
</template>

<style scoped>
div {
  width: 100%;
}

h2,
h3 {
  font-family: "Inter", sans-serif;
  width: 100%;
  text-align: center;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sponsor-headline {
  background-color: #000000;
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
  max-height: 150px;
  object-fit: contain;
}

.page-ending {
  margin-top: 50px;
  background-color: #000000;
  text-align: center;
}

.page-ending h3 {
  color: #ffffff;
  font-size: 32px;
}
</style>

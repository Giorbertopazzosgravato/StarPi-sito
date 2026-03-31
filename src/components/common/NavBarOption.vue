<script setup>
defineProps({
  title: {
    type: String,
    default: "Titolo",
  },
  isActive: {
    type: Boolean,
    default: false,
  }
});
</script>

<template>
  <div :class="{ active: isActive, default: !isActive }">
    {{ title }}
  </div>
</template>

<style scoped>
div {
  border-top: 9px solid #DCA74B;
  max-width: fit-content;
  font-size: 40px;
  font-family: Calibri, serif;
  color: #FFFFFF;
  background-color: #213152;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 7px;
  border-bottom: 9px solid transparent;
  transition: all 0.2s ease;
}

.default:hover {
  background-color: rgba(45, 76, 122, 0.2);
  border-top: 9px solid #E04814;
  border-bottom: 9px solid #E04814;
}

.active {
  border-top: 9px solid #C82334;
  background-color: #29446E;
}

/* --- ADATTAMENTO MOBILE --- */
@media (max-width: 850px) {
  div {
    font-size: 24px; /* Font più piccolo */
    max-width: 100%; /* Occupa tutta la larghezza a tendina */
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    border-top: 4px solid #DCA74B; /* Bordi ridimensionati */
    border-bottom: 4px solid transparent;
    padding: 15px 0; /* Più spazio per cliccare con il dito */
    margin-right: 0;
  }
  
  .default:hover {
    border-top: 4px solid #E04814;
    border-bottom: 4px solid #E04814;
  }
  
  .active {
    border-top: 4px solid #C82334;
  }
}
</style>
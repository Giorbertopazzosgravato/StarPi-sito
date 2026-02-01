<script setup>
defineProps({
  title: {
    type: String,
    default: "Titolo",
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  isRightAligned: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    :class="{
      active: isActive,
      default: !isActive,
      'right-aligned': isRightAligned,
    }"
  >
    {{ title }}
  </div>
</template>

<style scoped>
div {
  border-top: 9px solid #dca74b;
  max-width: fit-content;
  font-size: 40px;
  font-family: Calibri, serif;
  color: #ffffff;
  background-color: #213152;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 7px;
  border-bottom: 9px solid transparent;
}
.default:hover {
  background-color: rgba(45, 76, 122, 0.2);
  border-top: 9px solid #e16038;
  border-bottom: 9px solid #e16038;
}
.active {
  border-top: 9px solid #c82334;
  background-color: #29446e;
}
.right-aligned {
  margin-left: auto;
}
</style>

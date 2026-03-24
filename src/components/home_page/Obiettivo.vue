<script setup>
</script>

<template>
  <div class="obiettivo-wrapper">
    <div class="text-content">
      <h1 class="title"><b>IL NOSTRO OBIETTIVO</b></h1>
      <p class="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
    <div class="image-content">
      <img src="/home_page/placeholder.png" alt="placeholder" class="obiettivo-img" />
    </div>
  </div>
</template>

<style scoped>
.obiettivo-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  max-width: 1200px;
  margin: 60px auto;
  gap: 40px;
  color: white;
}

.text-content {
  width: 100%;
  text-align: center;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.description {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #ddd;
}

.image-content {
  width: 100%;
  display: flex;
  justify-content: center;
}

.obiettivo-img {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

@media (min-width: 850px) {
  .obiettivo-wrapper {
    flex-direction: row;
    justify-content: space-between;
  }
  .text-content {
    width: 55%;
    text-align: left;
  }
  .title { font-size: 3.5rem; }
  .image-content {
    width: 40%;
    justify-content: flex-end;
  }
}
</style>
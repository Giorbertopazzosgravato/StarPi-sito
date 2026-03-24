<script setup>
</script>

<template>
	<div class="settore-card">
		<div class="image-section">
			<slot name="image">
				<img src="/car.gif" alt="placeholder" class="settore-img">
			</slot>
		</div>
		<div class="text-section">
			<h1 class="title"><slot name="titolo"></slot></h1>
			<p class="description"><slot name="descrizione"></slot></p>
		</div>
	</div>
</template>

<style scoped>
.settore-card {
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 1200px;
  margin: 20px auto;
  background-color: #1a1f2c; /* Stesso blu scuro di NewsCard */
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  color: white;
}

.image-section { 
  width: 100%; 
  height: 250px; 
}

.image-section :deep(img), .settore-img { 
  width: 100%; 
  height: 100%; 
  display: block; 
  object-fit: cover; 
}

.text-section { 
  width: 100%; 
  padding: 30px; 
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
}

.title { 
  font-size: 2rem; 
  margin: 0 0 15px 0; 
  line-height: 1.2; 
}

.description { 
  font-size: 1.1rem; 
  color: #ccc; 
  line-height: 1.5; 
  margin: 0;
}

@media (min-width: 850px) {
  .settore-card { 
    flex-direction: row; 
    height: 350px; 
    border-radius: 50px; 
  }
  .image-section { width: 45%; height: 100%; }
  .text-section { width: 55%; padding: 40px 60px; }
  .title { font-size: 2.5rem; }
}
</style>
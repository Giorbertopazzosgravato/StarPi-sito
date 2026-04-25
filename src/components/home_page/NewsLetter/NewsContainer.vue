<script setup>
import NewsCard from "@/components/home_page/NewsLetter/NewsCard.vue";
import {onMounted, ref} from "vue";

const newsContainer = ref(null);
const news = ref([]);

async function fetch_news(){
  try{
    const response = await fetch("/database/please_server_I_need_this_my_news_is_kinda_homeless");
    if(!response.ok){
      throw new Error("my news are kinda homeless");
    }
    const data = await response.json();
    news.value = data;
  } catch(e){
    console.log(e);
  }
}

onMounted(()=>{
  fetch_news();
})

function scrollLeft(){
  if (newsContainer.value){
    newsContainer.value.scrollBy({ left: -300, behavior: "smooth" })
  }
}
function scrollRight(){
  if (newsContainer.value){
    newsContainer.value.scrollBy({ left: 300, behavior: "smooth" })
  }
}
</script>

<template>
  <div class="slider-wrapper">
    <button @click="scrollLeft" class="slider-btn"><span>&#10094;</span></button>
    <div class="slider-box" ref="newsContainer">
      <NewsCard v-for="card in news" :key="card.title" :image="card.image" :title="card.title" :link="card.link"/>
    </div>
    <button @click="scrollRight" class="slider-btn"><span>&#10095;</span></button>
  </div>
</template>

<style scoped>
.slider-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px; /* Gap ridotto per schermi piccoli per far spazio alle frecce */
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 5px;
}

.slider-box {
  display: flex;
  background-color: rgba(28, 42, 106, 0.57);
  width: 70vw; /* Allargato al 70% su mobile per dare più spazio alle Card */
  overflow-x: auto;
  overflow-y: hidden;
  gap: 20px;
  border-radius: 25px;
  padding: 15px;
  align-items: flex-start;
}

.slider-btn {
  width: 45px;
  height: 45px;
  background: #0F1B31;
  border: 2px solid #E04814;
  border-radius: 50%;
  color: #E04814;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.slider-btn:hover {
  background: #E04814;
  color: white;
  transform: scale(1.1);
}

.slider-box::-webkit-scrollbar { width: 10px; height: 6px; }
.slider-box::-webkit-scrollbar-button { display: none; }
.slider-box::-webkit-scrollbar-track { display: none; }
.slider-box::-webkit-scrollbar-track-piece { display: none; }
.slider-box::-webkit-scrollbar-thumb { border-radius: 24px; background-color: rgba(0, 12, 38, 0.5); }
.slider-box::-webkit-scrollbar-corner { display: none; }

/* --- DESKTOP RESPONSIVE --- */
@media (min-width: 850px) {
  .slider-wrapper { gap: 20px; padding: 20px; }
  .slider-box { width: 55vw; gap: 30px; border-radius: 40px; padding: 20px; }
  .slider-btn { width: 50px; height: 50px; font-size: 1.2rem; }
}
</style>
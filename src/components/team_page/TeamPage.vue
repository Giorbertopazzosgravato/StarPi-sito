<script setup>
  import TeamSubsection from "@/components/team_page/TeamSubsection.vue";
  import AnnataWrapper from "@/components/team_page/AnnataWrapper.vue";
  import {useRoute} from "vue-router";
  import {onMounted, ref, watch} from "vue";

  function createCapoDipartimento( nome, quote, linkedin_link, imgURL){
    return {
      nome, quote, linkedin_link, imgURL
    }
  }
  function createPersona(nome, linkedin_link, imgURL){
    return {
      nome, linkedin_link, imgURL
    }
  }

  const route = useRoute()
  const anno = ref(Number(useRoute().params.pathMatch) || 2025)
  const current_year = ref(new Date().getFullYear() - 1);

  const validaAnno = (val) => {
	  const n = Number(val)
	  return n < 2024 ? 2024 : n > current_year.value? current_year.value : n
  }
  watch(
	  () => route.params.pathMatch,
	  (newPath) => {
		  anno.value = validaAnno(newPath)
	  }
  )
  function preAnno(){
	  if(anno.value > 2024){
		  anno.value--;
	  }
  }
  function postAnno(){
	  if(anno.value >= current_year.value ){
		  anno.value = current_year.value
	  } else {
		  anno.value++
	  }
  }

  const Pagina = {
    Anno: '2025',
    Dipartimenti: [{
      NomeDipartimento: 'Architetture e sistemi operativi',
      CapoDipartimento: new createCapoDipartimento(
        'Evil Marco Danelutto',
        'odio architetture e sistemi operativi',
        'https://pornhub.com/',
          '/aeso.png'
      ),
      Membri: [
        new createPersona('Giacomo Consani', '', '/car.gif'),
        new createPersona('Giacomo Consani', '', '/car.gif'),
        new createPersona('Giacomo Consani', '', '/car.gif'),
        new createPersona('Giacomo Consani', '', '/car.gif'),
        new createPersona('Giacomo Consani', '', '/car.gif'),
        new createPersona('Giacomo Consani', '', '/car.gif')
      ]
      }]
  }
</script>

<template>
  <div class="header-section">
    <img src="/team_page/teams_background.png" class="bg-image" alt="bgimage"/>
  </div>
  <div class="YearNavContainer">
      
      <router-link
        :to="`/Team/${anno > 2024 ? anno - 1 : 2024}`"
        @click="preAnno"
        class="YearNavButton"
        :class="{'NavButtonDisabled': anno <= 2024}"
      >
        <span>&#10094;</span> 
      </router-link>

      <div class="YearDisplay">
        <span class="Yeartext">{{ anno }}</span>
        <span class="YearSeparator">/</span>
        <span class="Yeartext">{{ anno + 1 }}</span>
      </div>

      <router-link
        :to="`/Team/${anno < current_year ? anno + 1 : current_year}`"
        @click="postAnno"
        class="YearNavButton"
        :class="{'NavButtonDisabled': anno >= current_year}"
      >
        <span>&#10095;</span>
      </router-link>

    </div>
  <div class="content-section">
    <AnnataWrapper :anno="Pagina.Anno">
      <div v-for="(Dipa, index) in Pagina.Dipartimenti" :key="index">
        <TeamSubsection
          :nome_dipartimento="Dipa.NomeDipartimento"
          :capoDipartimento="Dipa.CapoDipartimento"
          :persone="Dipa.Membri"
        />
      </div>
    </AnnataWrapper>
  </div>
</template>
<!--
  <div v-if="$route.hash === '#2024'" class="feed-item">
    <AnnataWrapper anno="2024">
      <TeamSubsection
        nome_dipartimento="FROCI ALLA RISCOSSA"
        :capoDipartimento="
        new createCapoDipartimento(
        'Alessandro Bonari',
        'amo i froci e i cazzi mlml',
        'https://pornhub.com/',
        '/team_page/alessandro.png'
        )"
        :persone="[
        new createPersona('Giacomo Consani', '', '/car.gif'),
        new createPersona('Adnaan Juma', '', '/download.jpg'),
        new createPersona('Riccardo Necrofilo', '', '/big_raga.webp'),
        new createPersona('Avni Jashari', '', '/home_page/placeholder.png'),
        new createPersona(),
      ]"
      />
      <TeamSubsection id="IT"
        nome_dipartimento="EPSTEIN COMPETITORS"
        :capoDipartimento="
        new createCapoDipartimento(
        'Riccardo Frociazzo',
        'mi sono dimenticato di nuovo il cognome, viva i processori pipeline, Marco danelutto mi fa una sega a 4 mani',
        'https://pornhub.com/',
        '/team_page/epstein.webp'
        )"
        :persone="[
        new createPersona('Giacomo Consani', '', '/car.gif'),
        new createPersona('Adnaan Juma', '', '/download.jpg'),
        new createPersona('Vincenzo Gervasi', '', '/team_page/VincenzoGervasi.jpg'),
        new createPersona('Avni Jashari', '', '/home_page/placeholder.png'),
        new createPersona(),
      ]"
      />
    </AnnataWrapper>
  </div>
  -->

<style scoped>
.bg-image {
  width: 100%;
  height: auto;
  display: block;
}

.YearNavContainer {
  position: relative; 
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: -25px auto 50px auto; 
  width: fit-content;
  z-index: 10;
}

.content-section {
  position: relative;
  width: 100%;
  padding-top: 20px;
}
.YearDisplay {
  display: flex;
  align-items: center;
  gap: 15px;
  background: rgba(15, 27, 49, 0.8);
  backdrop-filter: blur(8px);
  padding: 8px 25px;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  white-space: nowrap;
}

.Yeartext {
  font-size: 1.8rem;
  font-weight: 800;
  color: #FF6200;
}

.YearSeparator {
  color: white;
  font-size: 1.5rem;
  opacity: 0.5;
}

.YearNavButton {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: rgba(15, 27, 49, 0.8);
  border: 2px solid #FF6200;
  border-radius: 50%;
  color: #FF6200;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.YearNavButton:hover {
  background: #FF6200;
  color: white;
  transform: scale(1.1);
}

.NavButtonDisabled {
  opacity: 0.3;
  pointer-events: none;
  border-color: #666;
  color: #666;
}

/* Fix per schermi piccoli */
@media (max-width: 600px) {
  .YearNavContainer { bottom: 5%; gap: 8px; }
  .Yeartext { font-size: 1.2rem; }
  .YearNavButton { width: 35px; height: 35px; }
}
</style>
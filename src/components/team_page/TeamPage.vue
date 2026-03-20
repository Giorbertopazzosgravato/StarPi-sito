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
  const current_year = new Date().getFullYear();

  const validaAnno = (val) => {
	  const n = Number(val)
	  return n < 2024 ? 2024 : n > current_year? current_year : n
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
	  if(anno.value >= current_year ){
		  anno.value = current_year
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
  <br>
  <br>
  <br>
  <br>
	<div class="TeamsImageContainer">
		<img src="/team_page/teams_background_2.png" width="100%" alt="bgimage"/>
	</div>

  <table style="width: 100%">
    <tr style="width: 100%">
      <th style="width: 33%">
        <router-link :to="`/team/${anno > 2024 ? anno - 1 : 2024}`" @click="preAnno" style="text-align: right">
          <h1 style="color: orange"> <== </h1>
        </router-link>
      </th>
      <th style="width: 33%">
        <h1 style="color: #FF6200"> {{anno}} </h1>
      </th>
      <th style="width: 33%">
        <router-link :to="'../team/' + (anno + 1)" @click="postAnno" style="text-align: left">
          <h1 style="color: orange"> ==> </h1>
        </router-link>
      </th>
    </tr>
  </table>

  <div>
  <AnnataWrapper :anno="Pagina.Anno">
    <div>
      <template v-for="(Dipa, index) in Pagina.Dipartimenti" :key="index">
        <TeamSubsection
          :nome_dipartimento="Dipa.NomeDipartimento"
          :capoDipartimento="Dipa.CapoDipartimento"
          :persone="Dipa.Membri"
        />
      </template>
    </div>
  </AnnataWrapper>
  </div>



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
</template>

<style scoped>
.TeamsImageContainer{
	display: flex;
	justify-content: center;
	max-width: 100%;
	overflow: hidden;
}
</style>
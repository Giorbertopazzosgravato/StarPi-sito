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
		  fetch_teams()
	  }
  }
  function postAnno(){
	  if(anno.value >= current_year.value ){
		  anno.value = current_year.value
	  } else {
		  anno.value++
		  fetch_teams()
	  }

  }

  const teams = ref([{
	  dipartimento : "Pisellino corto corto",
	  capo: {
		  nome: "Giacomo",
		  cognome: "Consani",
		  ruolo: "chief",
		  link: "https://pornhub.com",
	  },
	  persone:[
		  {
			  nome: "Riccardo",
			  cognome: "scaletta",
			  ruolo: "user",
			  link: "https://pornhub.com",
		  },
		  {
			  nome: "Mattia",
			  cognome: "Drogo",
			  ruolo: "user",
			  link: "https://pornhub.com",
		  }
	  ]
  }])

  async function fetch_teams(){
	  try{
		  const response = await fetch("http://localhost:7878/database/send_me_teams/" + anno.value);
		  if(!response.ok){
			  throw new Error("my teams are kinda homeless");
		  }
		  console.log("(=^･ω･^=) <-mao ")
		  const data = await response.json();
		  console.log("data: ", data);
		  teams.value = data;

	  } catch(e){
		  console.log(e);
	  }
  }

  onMounted(()=>{
	  fetch_teams();
  })
</script>

<template>
	<div class="TeamsImageContainer">
		<img src="/team_page/teams_background.png" width="100%" alt="bgimage"/>
	</div>

  <table style="width: 100%">
    <tr style="width: 100%">
      <th style="width: 33%">
        <router-link :to="`/team/${anno > 2024 ? anno - 1 : 2024}`" @click="preAnno" style="text-align: right">
          <h1 style="color: orange"> <== </h1>
        </router-link>
      </th>
      <th style="width: 33%">
        <h1 style="color: #FF6200"> {{anno + " - " + (anno+1)}} </h1>
      </th>
      <th style="width: 33%">
        <router-link :to="`/team/${anno < current_year ? anno + 1 : current_year}`" @click="postAnno" style="text-align: left">
          <h1 style="color: orange"> ==> </h1>
        </router-link>
      </th>
    </tr>
  </table>

  <div>
  <AnnataWrapper :anno="anno">
    <div>
      <template v-for="(dipartimento, index) in teams" :key="index">
        <TeamSubsection
          :nome_dipartimento="dipartimento.dipartimento"
          :capoDipartimento="dipartimento.capo"
          :persone="dipartimento.persone"
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
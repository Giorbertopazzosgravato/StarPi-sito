<script setup>
  import TeamSubsection from "@/components/team_page/TeamSubsection.vue";
  import AnnataWrapper from "@/components/team_page/AnnataWrapper.vue";
  import {useRoute} from "vue-router";

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


  let Anno = Number(useRoute().params.pathMatch)
  if(Anno){
    if(Anno < 2024) {
      Anno = 2024;
    }
  } else {
    Anno = 2025;
  }

  function PreAnno() {
    if(Anno > 2024) {
      Anno--;
    }
    console.log();

  }
  function PostAnno() {
    Anno++;
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
        <a :href="'../team/'+(Anno-1)" style="text-align: right" :onclick="PreAnno">
          <h1 style="color: orange"> <== </h1>
        </a>
      </th>
      <th style="width: 33%">
        <h1 style="color: #FF6200"> {{Anno}} </h1>
      </th>
      <th style="width: 33%">
        <a :href="'../team/'+(Anno+1)" style="text-align: left" :onclick="PostAnno">
          <h1 style="color: orange"> ==> </h1>
        </a>
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

<script setup>
  import ManPass from "@/components/Utenza/Utente/Opzioni/ManPassword.vue";
  import ManLink from "@/components/Utenza/Utente/Opzioni/ManLink.vue";


  let Attivo = undefined;



/*
* -------------------------------------------------
* |                                     __
* |         NOME                      /    \
* |  Opzioni:                         \____/
* |     1                             /    \
* |     2                            / foto \
* |     3                           /        \
* |     4
* | esci
* -------------------------------------------------
*
* Operazioni da fare :
*   cambia password
*   cambiare link esterno
*   cambiare citazione
*   abbandona l' organizzazione
*
* Info da dare :
*   Anno / dipartimento
*
* */

  import {watch} from "vue";
  import {useRoute} from "vue-router";

  const route = useRoute()

  watch(
      () => route.params.pathMatch,
      (newPath) => {
       valida(newPath)
        console.log(Attivo)
      }
  )


  const valida = (val) => {
    console.log(val)
    switch (val) {
      case "Password":
        console.log("Password is valid")
        Attivo = ManPass;
        return;
      case "Link":
        Attivo = ManLink
        return;
      default:
        Attivo = undefined;
    }
  }

</script>

<template>
  <br>
  <br>
  <br>
  <br>




  <table>
    <tr style="width: 100%">
      <th style="width: 12%">
        NOME
      </th>
      <th><br></th>
      <th><br></th>
      <th><br></th>
      <th style="width: 12%">
        <img src="/public/car.gif">
      </th>
    </tr>

    <tr style="width: 30%">
      <th rowspan="5" ><br></th>
      <th>
        <router-link :to="`/AreaPrivata/Password`"> password </router-link>
      </th>
      <th  rowspan="5"><br></th>

      <th rowspan="5" style="width: 70%">

        <Attivo></Attivo>

      </th>
    </tr>
    <tr>
      <th>
        <a href="/link"> link esterno </a>
      </th>
    </tr>
    <tr>
      <th>
        <a> citazione </a>
      </th>
    </tr>
    <tr>
      <th>
        <a> abbandona l' organizzazione </a>
      </th>
    </tr>
  </table>





  <button>
    <a href="/">
      <h1> Legno Fuori</h1>
    </a>
  </button>
</template>

<style></style>
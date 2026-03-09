<script>

</script>

<template>
  <div class="Testata">  <!--  lo stesso della barra così sembra fatto meglio -->
    <br>
    <h1 class="PrimoTesto"> Chi siamo </h1>
    <table class="Tabellazione">
      <tr>
        <th>
          <a href="/team">
            <h1 class="SottoTesto"> Scopri il team </h1>
          </a>
        </th>
        <th>
          <a href="/gallery">
            <h1 class="SottoTesto"> Vai alla galleria </h1>
          </a>
        </th>
        <th>
          <a href="/sponsor">
            <h1 class="SottoTesto"> Visita gli sponsor </h1>
          </a>
        </th>
      </tr>
      <tr>
        <th></th>
        <th>
          <a href="https://progettounipi.altervista.org/">
            <h1 class="Informazzione"> LEANING PROJECT </h1>
          </a>
        </th>
        <th></th>
      </tr>
    </table>


    <br>
    <br>
    <br>
    <br>
    <h2 class="PrimoTesto"> Contatti </h2>
    <table class="Tabellazione">
      <tr>
        <th>
          <h1 class="SottoTesto"> Telefono: </h1>
          <h1 class="Informazzione"> +39 123 456 7890 </h1>
        </th>
        <th>
          <h1 class="SottoTesto"> Lavora con noi </h1>
        </th>
        <th>
          <h1 class="SottoTesto"> Email: </h1>
          <h1 class="Informazzione"> info.desk@starpi.it </h1>
        </th>
      </tr>
      <tr>
        <th>
          <br>
          <br>
          <br>
          <br>
        </th>
      </tr>
      <tr>
        <th>
          <a target="_blank" href="https://www.instagram.com/starpi.eu/">
            <img src="/instagram_ico.png">
          </a>
        </th>
        <th>
          <a target="_blank" href="https://it.linkedin.com/company/starpi-aerospace">
            <img src="/linkedin_ico.png">
          </a>
        </th>
        <th>
          <a target="_blank" href="https://linktr.ee/starpi.eu">
            <img src="/linktree_ico.png">
          </a>
        </th>
      </tr>
    </table>

    <br>
    <br>
    <h1 class="FineTesto">
      <a href="/team#IT">
        Provided by the IT team
      </a>
      <br>
      <br>
      Diritti d' autore riservati     2025 StarPi
    </h1>
    <br>
  </div>
</template>


<!-- I colori sono quelli della navbar -->
<!-- I colori sono quelli del plug alla news letter -->

<style scoped>
  .Testata {
    align-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    background-color: #213152;
    height: 100%;
  }
  .PrimoTesto {
    align-self: center;
    border-top: 3px solid #E16038;
    border-bottom: 3px solid #E16038;
    max-width: 100%;
    font-size: 30px;
    font-family: Calibri,serif;
    color: #B8B8B8;
    background-color: #213152;
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 7px;
  }
  .Tabellazione {
    max-width: 100%;
    width: 100%;
  }
  tr,th {
    width: 33%;
  }
  .SottoTesto {
    font-size: 30px;
    color: #000030;
  }
  .FineTesto {
    background:#000000;
    color: #E0E0E0;
  }
  .Informazzione {
    color: #DCA74B;
  }
</style>
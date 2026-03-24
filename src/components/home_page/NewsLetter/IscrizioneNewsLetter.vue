<script setup>
</script>

<template>
  <div class="newsletter-box">
    <div class="newsletter-header">
      <h2 class="alert-text">Ti piace quello che vedi?</h2>
      <p class="newsletter-sub">Iscriviti alla newsletter!</p>
    </div>

    <form class="newsletter-form" action="" method="post" @submit.prevent>
      <input type="text" name="nome" id="nome" placeholder="Come ti chiami?" class="n-input" />
      <input type="email" name="e-mail" id="email" placeholder="Inserisci la tua e-mail!" class="n-input" />
      
      <button type="submit" class="n-btn">
        <b>Iscrivimi!</b>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path fill="currentColor" d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
        </svg>
      </button>
    </form>
  </div>
</template>

<style scoped>
.newsletter-box {
  width: 100%; 
  max-width: none;
  margin: 0; 
  padding: 40px 20px;
  background: linear-gradient(180deg, rgba(23, 182, 210, 0.25) 0%, rgba(12, 64, 135, 0.5) 100%);
  border-radius: 40px;
  text-align: center;
  color: white;
  box-sizing: border-box;
}

.newsletter-header { margin-bottom: 30px; }
.alert-text { font-size: 2rem; margin: 0; font-weight: bold; }
.newsletter-sub { font-size: 1.2rem; margin: 10px 0; color: #ddd; }

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 500px;
  margin: 0 auto;
}

.n-input {
  padding: 15px;
  border-radius: 12px;
  border: 2px solid #E16038;
  background: #B8B8B8;
  font-size: 1rem;
  color: #333;
}

.n-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 15px;
  background-color: #E16038;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background 0.3s;
}

.n-btn:hover { background-color: #DCA74B; }

@media (min-width: 850px) {
  .newsletter-box { border-radius: 50px; }
  .alert-text { font-size: 2.5rem; }
}
</style>
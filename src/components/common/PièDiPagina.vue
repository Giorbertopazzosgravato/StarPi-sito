<template>
  <footer class="site-footer">
    <div class="footer-container">
      
      <div class="footer-column">
        <h3 class="footer-title">STARPI</h3>
        <ul class="footer-links">
          <li><a href="/home">Home</a></li>
          <li><a href="/news">News</a></li>
          <li><a href="/progetti">Progetti</a></li>
          <li><a target="_blank" href="https://progettounipi.altervista.org/">Leaning Project</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3 class="footer-title">Chi siamo</h3>
        <ul class="footer-links">
          <li><a href="/team">Il nostro Team</a></li>
          <li><a href="/dipartimenti">Dipartimenti</a></li>
          <li><a href="/galleria">Galleria</a></li>
          <li><a href="/sponsor">Partners & Sponsor</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3 class="footer-title">Lavora con noi</h3>
        <ul class="footer-links">
          <li><a href="/posizioni-aperte">Posizioni aperte</a></li>
          <li><a href="mailto:info.desk@starpi.it">info.desk@starpi.it</a></li>
          <li class="info-text">+39 123 456 7890</li>
          <li><a href="/contatti">Modulo contatti</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3 class="footer-title">Social</h3>
        <ul class="footer-links">
          <li><a target="_blank" href="https://www.instagram.com/starpi.eu/">Instagram</a></li>
          <li><a target="_blank" href="https://it.linkedin.com/company/starpi-aerospace">LinkedIn</a></li>
          <li><a target="_blank" href="https://linktr.ee/starpi.eu">Linktree</a></li>
        </ul>
      </div>

      <div class="footer-column newsletter-col">
        <h3 class="footer-title">Iscrizione newsletter</h3>
        <form class="newsletter-form" @submit.prevent>
          <input type="email" placeholder="Iscriviti qui!" required>
          <button type="submit">Subscribe</button>
        </form>
      </div>

    </div>

    <div class="footer-bottom">
      <p>Copyright © 2025 StarPi. All rights reserved. | <a href="/team#IT">Provided by the IT team</a></p>
    </div>
  </footer>
</template>

<style scoped>
/* ==========================================
   STILI BASE DEL FOOTER
   ========================================== */
.site-footer {
  /* Mantenimento colori originali */
  background-color: #1a253d;
  color: #B8B8B8;
  font-family: Calibri, sans-serif;
  padding-top: 60px;
  width: 100%;
  box-sizing: border-box;
}

/* ==========================================
   LA GRID RESPONSIVE 
   ========================================== */
.footer-container {
  display: grid;
  /* Utilizziamo auto-fit per distribuire le colonne in modo fluido */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  /* Aumentato a 1400px per evitare il taglio laterale e allinearsi meglio al corpo pagina */
  max-width: 1400px; 
  margin: 0 auto; /* Forza la centratura orizzontale */
  padding: 0 40px;
  padding-bottom: 50px;
  justify-content: center; /* Assicura che le colonne siano centrate nel contenitore */
}

.newsletter-col {
  min-width: 280px;
}

/* ==========================================
   TITOLI E LINK DELLE COLONNE
   ========================================== */
.footer-title {
  color: #FFFFFF;
  font-size: 18px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: bold;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links a, .info-text {
  color: #aeb8c7;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #DCA74B;
}

/* ==========================================
   MODULO NEWSLETTER (Breakpoint 1560px sennó esplode)
   ========================================== */
.newsletter-form {
  display: flex;
  width: 100%;
  margin-top: 10px;
}

.newsletter-form input {
  flex-grow: 1;
  padding: 12px 15px;
  border: none;
  background-color: #e0e0e0;
  color: #333;
  font-size: 16px;
  outline: none;
}

.newsletter-form input::placeholder {
  color: #888;
}

.newsletter-form button {
  padding: 12px 20px;
  background-color: #E16038;
  color: white;
  border: none;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.newsletter-form button:hover {
  background-color: #DCA74B;
}

/* Fix per evitare il taglio laterale a risoluzioni intermedie */
@media (max-width: 1560px) {
  .newsletter-form {
    flex-direction: column;
  }
  .newsletter-form button {
    margin-top: 8px;
    width: 100%;
  }
}

/* ==========================================
   BARRA COPYRIGHT
   ========================================== */
.footer-bottom {
  background-color: #0d1526;
  text-align: center;
  padding: 20px;
  font-size: 14px;
  color: #888;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-bottom p {
  margin: 0;
}

.footer-bottom a {
  color: #DCA74B;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-bottom a:hover {
  color: #E16038;
}

/* ==========================================
   ADATTAMENTO MOBILE
   ========================================== */
@media (max-width: 768px) {
  .footer-container {
    gap: 30px;
    padding: 0 20px;
    padding-bottom: 40px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
</style>
<script setup>
</script>

<template>
  <footer class="site-footer">

    <section class="footer-container sponsor-section">
      <div class="sponsor-wrapper">
        <h2 class="footer-title sponsor-title">Partners Principali</h2>
        <div class="sponsor-grid">
          <a class="sponsor-card" target="_blank" href="/sponsor">
            <img class="sponsor-img" src="/sponsor_page/dewe.png" alt="Dewe" />
          </a>
          <a class="sponsor-card" target="_blank" href="/sponsor">
            <img class="sponsor-img" src="/sponsor_page/nlcomp.webp" alt="NL Comp" />
          </a>
          <a class="sponsor-card" target="_blank" href="/sponsor">
            <img class="sponsor-img" src="/sponsor_page/unipi.jpg" alt="Unipi" />
          </a>
          <a class="sponsor-card" target="_blank" href="/sponsor">
            <img class="sponsor-img" src="/sponsor_page/CRMcomposti.png" alt="CRM Composti" />
          </a>
          <a class="sponsor-card" target="_blank" href="/sponsor">
            <img class="sponsor-img" src="/sponsor_page/EUROAVIAPisa.png" alt="Euroavia" />
          </a>
          <a class="sponsor-card" target="_blank" href="/sponsor">
            <img class="sponsor-img" src="/sponsor_page/BLUETTI.png" alt="Bluetti" />
          </a>
        </div>
      </div>
    </section>

    <section class="footer-container">

      <div class="footer-column">
        <h3 class="footer-title">STARPI</h3>
        <nav>
          <ul class="footer-links">
            <li class="footer-item"><a class="footer-link" href="/home">Home</a></li>
            <li class="footer-item"><a class="footer-link" href="/news">News</a></li>
            <li class="footer-item"><a class="footer-link" href="/galleria">Galleria</a></li>
            <li class="footer-item"><a class="footer-link" href="/sponsor">Partners & Sponsor</a></li>
          </ul>
        </nav>
      </div>

      <div class="footer-column">
        <h3 class="footer-title">Progetti</h3>
        <nav>
          <ul class="footer-links">
            <li class="footer-item"><a class="footer-link" href="/team">Rocketry Team</a></li>
            <li class="footer-item"><a class="footer-link" target="_blank" href="https://www.leaningproject.it/">LeanIng Project</a></li>
          </ul>
        </nav>
      </div>

      <div class="footer-column">
        <h3 class="footer-title">Social</h3>
        <nav>
          <ul class="footer-links">
            <li class="footer-item"><a class="footer-link" target="_blank" href="https://www.instagram.com/starpi.eu/">Instagram</a></li>
            <li class="footer-item"><a class="footer-link" target="_blank" href="https://it.linkedin.com/company/starpi-aerospace">LinkedIn</a></li>
            <li class="footer-item"><a class="footer-link" target="_blank" href="https://linktr.ee/starpi.eu">Linktree</a></li>
          </ul>
        </nav>
      </div>

      <div class="footer-column">
        <h3 class="footer-title">Legals</h3>
        <nav>
          <ul class="footer-links">
            <li class="footer-item"><a class="footer-link" href="/privacy-policy">Privacy Policy</a></li>
            <li class="footer-item"><a class="footer-link" href="/statuto">Statuto</a></li>
            <li class="footer-item"><a class="footer-link" href="/contatti">Contatti</a></li>
          </ul>
        </nav>
      </div>

    </section>

    <section class="footer-bottom">
      <p class="footer-copyright">
        StarPi é una associazione no-profit.
        Copyright © 2025 StarPi. All rights reserved. |
        <a class="footer-author-link" href="/team#IT">Provided by the IT team</a>
      </p>
    </section>
  </footer>
</template>

<style scoped>
/* ==========================================
   STILI BASE DEL FOOTER
   ========================================== */
.site-footer {
  background-color: #1a253d;
  color: #B8B8B8;
  font-family: Calibri, sans-serif;
  padding-top: 10px;
  width: 100%;
  box-sizing: border-box;
}

/* ==========================================
   LA GRID RESPONSIVE
   ========================================== */
.footer-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  padding-bottom: 50px;
  justify-content: center;
}

/* ==========================================
   SEZIONE SPONSOR (STILE CARD)
   ========================================== */
.sponsor-section {
  display: block;
  width: 100%;
  margin-bottom: 20px;
}

.sponsor-title {
  text-align: center;
  font-family: 'Nasalization', sans-serif;
  font-size: 32px !important;
  margin-bottom: 35px;
}

.sponsor-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
}

.sponsor-card {
  background-color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 3 / 2;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.sponsor-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
}

.sponsor-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
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

.footer-item {
  margin: 0;
  padding: 0;
}

.footer-link {
  color: #aeb8c7;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #E04814;
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

.footer-copyright {
  margin: 0;
}

.footer-author-link {
  color: #E04814;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-author-link:hover {
  color: #E04814;
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

  .sponsor-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }

  .sponsor-card {
    padding: 15px;
    aspect-ratio: 3 / 2;
  }
}

@media (max-width: 480px) {
  .sponsor-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .sponsor-card {
    padding: 10px;
  }
}
</style>
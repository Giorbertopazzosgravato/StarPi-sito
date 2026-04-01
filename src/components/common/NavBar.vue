<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

// ==========================================
// LOGICA HIDE-ON-SCROLL
// ==========================================
const isNavbarVisible = ref(true);
let lastScrollPosition = 0;

function handleScroll() {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScrollPosition < 50) {
    isNavbarVisible.value = true;
    lastScrollPosition = currentScrollPosition;
    return;
  }
  if (currentScrollPosition > lastScrollPosition) {
    isNavbarVisible.value = false;
  } else {
    isNavbarVisible.value = true;
  }
  lastScrollPosition = currentScrollPosition;
}

onMounted(() => { window.addEventListener("scroll", handleScroll); });
onUnmounted(() => { window.removeEventListener("scroll", handleScroll); });

// ==========================================
// LOGICA MENU E DATI
// ==========================================
const isSidebarOpen = ref(false);
const closeSidebar = () => { isSidebarOpen.value = false; };
const route = useRoute();
const isActiveRoute = (path) => route ? route.path === path : false;

const navLinks = [
  { title: "Home",       link: "/home" },
  { title: "News",       link: "/news" },
  { title: "Progetti",   link: "/progetti" },
  { title: "Team",       link: "/team" },
  //{ title: "Galleria",   link: "/Galleria" },
  //{ title: "Reclute", link:"/Reclute}
  { title: "Contact us", link: "/contatti" },
  { title: "Sponsors",   link: "/sponsor" }

];
</script>

<template>
  <div>
    <header class="desktop-navbar" :class="{ 'navbar-hidden': !isNavbarVisible }">
      <div class="navbar-container">
        <RouterLink to="/home" class="logo-container">
          <img src="/navBar/logo_starpi.png" alt="Logo StarPi" class="real-logo" />
          <span class="logo-text">StarPi</span>
        </RouterLink>

        <nav class="nav-links-wrapper">
          <RouterLink 
            v-for="item in navLinks" 
            :key="item.title" 
            :to="item.link" 
            class="modern-link" 
            :class="{ 'active-link': isActiveRoute(item.link) }"
          >
            {{ item.title }}
          </RouterLink>

    <!--      <RouterLink to="/login" class="modern-link login-btn" :class="{ 'active-link': isActiveRoute('/login') }">
            Log in
          </RouterLink>-->
        </nav>
      </div>
    </header>

    <div class="mobile-container">
      <button class="hamburger-btn" 
              @click="isSidebarOpen = true" 
              v-if="!isSidebarOpen"
              :class="{ 'btn-hidden': !isNavbarVisible }">
        ☰
      </button>

      <div class="overlay" :class="{ 'active': isSidebarOpen }" @click="closeSidebar"></div>

      <aside class="sidebar" :class="{ 'open': isSidebarOpen }">
        <button class="close-btn" @click="closeSidebar">✕</button>

        <nav class="nav-content">
          <RouterLink 
            v-for="item in navLinks" 
            :key="item.title" 
            :to="item.link" 
            class="nav-link" 
            active-class="active-link-mobile" 
            @click="closeSidebar"
          >
            {{ item.title }}
          </RouterLink>
          
          <hr class="mobile-divider">

  <!--        <RouterLink to="/login" class="nav-link login-mobile" active-class="active-link-mobile" @click="closeSidebar">
            Log in
          </RouterLink>-->
        </nav>
      </aside>
    </div>
  </div>
</template>

<style scoped>
/* ==========================================
   STILI DESKTOP (Full Width / Estremi)
   ========================================== */
.desktop-navbar {
  position: fixed;
  top: 0; left: 0; width: 100%;
  z-index: 9999;
  background-color: #1D2E4D;
  backdrop-filter: blur(8px); 
  transition: transform 0.4s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05); 
}

.navbar-hidden { transform: translateY(-100%); }

.navbar-container {
  display: flex;
  justify-content: space-between; 
  align-items: center;
  width: 100%;
  /* Larghezza massima elevata per portare gli elementi agli estremi su schermi larghi */
  max-width: 1800px; 
  margin: 0 auto;
  padding: 0 40px; 
  height: 70px; 
  box-sizing: border-box;
}

.logo-container {
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 15px;
}

.real-logo { width: 40px; height: 40px; object-fit: contain; }

/* Dimensione scritta StarPi a 24px */
.logo-text {
  color: white;
  font-family: Arial, sans-serif;
  font-size: 24px;
  font-weight: bold;
}

.nav-links-wrapper {
  display: flex;
  align-items: center;
  gap: 30px; 
}

.modern-link {
  color: #e0e0e0;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 22px;
  font-weight: bold; 
  position: relative;
  transition: color 0.3s ease;
  white-space: nowrap;
}

.modern-link:hover, .active-link { color: #ffffff; }

/* Linea animata sotto i link */
.modern-link::after {
  content: '';
  position: absolute;
  bottom: -5px; left: 0; width: 0; height: 2px;
  background-color: #E04814;
  transition: width 0.3s ease;
}

.modern-link:hover::after, .active-link::after { width: 100%; }

/* Tasto Log in con bordo */
.login-btn {
  margin-left: 20px;
  padding: 8px 18px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  transition: all 0.3s ease;
}

.login-btn:hover {
  border-color: #E04814;
  background-color: rgba(225, 96, 56, 0.1);
}

.login-btn::after { display: none; }

/* ==========================================
   BREAKPOINT 1100px (Fix sovrapposizione)
   ========================================== */
.mobile-container { display: none; }

@media (max-width: 1100px) {
  .desktop-navbar { display: none !important; }
  .mobile-container { display: block !important; }
}

/* ==========================================
   STILI MOBILE / SIDEBAR
   ========================================== */
.hamburger-btn {
  position: fixed; top: 15px; left: 20px; font-size: 32px;
  background: none; border: none; color: #E04814;
  cursor: pointer; z-index: 9998;
}

.btn-hidden { transform: translateY(-200%); }

.overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
  background-color: rgba(0, 0, 0, 0.6); opacity: 0; pointer-events: none;
  transition: opacity 0.4s ease; z-index: 9999;
}

.overlay.active { opacity: 1; pointer-events: auto; }

.sidebar {
  position: fixed; top: 0; left: 0; width: 300px; height: 100vh;
  background-color: #1D2E4D;
  transform: translateX(-100%); 
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 10000; padding: 40px; display: flex; flex-direction: column;
}

.sidebar.open { transform: translateX(0); }

.close-btn {
  background: none; border: none; color: white; font-size: 28px;
  cursor: pointer; margin-bottom: 40px; text-align: left; padding: 0;
}

.nav-content { display: flex; flex-direction: column; gap: 25px; }

.nav-link {
  text-decoration: none; color: #e0e0e0; font-size: 20px; font-weight: bold;
}

.active-link-mobile { 
  color: white; 
  border-left: 3px solid #E04814;
  padding-left: 10px; 
}

.mobile-divider { 
  border: none; 
  border-top: 1px solid rgba(255,255,255,0.1); 
  margin: 10px 0; 
}

.login-mobile { color: #E04814; }
</style>
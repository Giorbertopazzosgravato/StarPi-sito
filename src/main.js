import { createApp } from 'vue'
import App from './App.vue'
import "./components/common/base.css"
import {createWebHistory, createRouter} from "vue-router";
import HomePage     from "@/components/home_page/HomePage.vue";
import NewsPage     from "@/components/news_page/NewsPage.vue";
import TeamPage     from "@/components/team_page/TeamPage.vue";
import ProgettiPage from "@/components/progetti_page/ProgettiPage.vue";
import ContactUs     from "@/components/ContactUs/ContactUs.vue";
import LogIn       from "@/components/Utenza/LogIn.vue";
import sponsors     from "@/components/sponsor/sponsor.vue";
import utenza from "@/components/Utenza/Utente/AreaPrivata.vue";
import amministrazione from "@/components/Utenza/Ammi/Amministrazione.vue";
import IscrizioneGiornale from "@/components/home_page/NewsLetter/IscrizioneGiornalePagina.vue";
const routes = [
    {path: "/",                           redirect:  "/home",            props:false },
    {path: "/home",                       component: HomePage,           props:false },
    {path: "/news",                       component: NewsPage,           props:false },
    {path: "/team",                       redirect:  "/team/2025",       props:false },
    {path: "/team/:pathMatch(\\d{4})",    component: TeamPage,           props:true  },
    {path: "/progetti",                   component: ProgettiPage,       props:false },
    {path: "/sponsor",                    component: sponsors,           props:false },
    {path: "/login",                      component: LogIn,              props:false },
    {path: "/AreaPrivata",                component: utenza,             props:false },
    {path: "/AreaPrivata/:pathMatch(.*)", component: utenza,             props:true  },
    {path: "/Master",                     component: amministrazione,    props:false },
    {path: "/IscrizioneGiornale",         component: IscrizioneGiornale, props:false },
    {path: '/:pathMatch(.*)',             component: ContactUs,          props:false }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // Se l'utente torna indietro con le frecce del browser, ripristina la posizione
        if (savedPosition) {
            return savedPosition;
        }

        // Se stiamo navigando all'interno della sezione "team" (es. da /team/2024 a /team/2025)
        // NON scrollare, rimani dove sei.
        if (to.path.startsWith('/team') && from.path.startsWith('/team')) {
            return false;
        }

        // In TUTTI gli altri casi (cambio pagina reale tra home, news, ecc.), vai in cima
        return { top: 0 };
    }
})

//   createApp(App).use(router).mount('#app')   <-- probblemi di sicronizzazione , pagina inizia il render prima che router sia pronto

const M = createApp(App).use(router)
router.isReady().then(() => {
    M.mount('#app')
})
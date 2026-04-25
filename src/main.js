import { createApp } from 'vue'
import App from './App.vue'
import "./components/common/base.css"
import {createWebHistory, createRouter} from "vue-router";

// Import dei componenti
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
import Rocketry from "@/components/progetti_page/Rocketry/Rocketry.vue";

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
    {path: "/Rocketry",                    component: Rocketry,            props:false },
    {path: '/:pathMatch(.*)',             component: ContactUs,          props:false }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.path.startsWith('/team') && from.path.startsWith('/team')) {
            return false;
        }
        return { top: 0 };
    }
})

const M = createApp(App).use(router)
router.isReady().then(() => {
    M.mount('#app')
})
import { createApp } from 'vue'
import App from './App.vue'
import "./components/common/base.css"
import {createWebHistory, createRouter} from "vue-router";
import HomePage     from "@/components/home_page/HomePage.vue";
import NewsPage     from "@/components/news_page/NewsPage.vue";
import TeamPage     from "@/components/team_page/TeamPage.vue";
import ProgettiPage from "@/components/progetti_page/ProgettiPage.vue";
import NotFound     from "@/components/NotFound/NotFound.vue";
import LogIn       from "@/components/Utenza/LogIn.vue";
import sponsors     from "@/components/sponsor/sponsor.vue";
import utenza from "@/components/Utenza/Utente/AreaPrivata.vue";
import amministrazione from "@/components/Utenza/Ammi/Amministrazione.vue";

const routes = [
    {path: "/",                redirect:  "/home"      },
    {path: "/home",            component: HomePage     },
    {path: "/news",            component: NewsPage     },
    {path: "/team",            redirect:  "/team/2025" },
    {path: "/team/:pathMatch(\\d{4})",            component: TeamPage     , props:true},
    {path: "/progetti",        component: ProgettiPage },
    {path: "/sponsor",         component: sponsors     },
    {path: "/login",                    component: LogIn,          props:false},
    {path: "/AreaPrivata",              component: utenza,          props:false},
    {path: "/AreaPrivata/:pathMatch(.*)",              component: utenza,          props:true},
    {path: "/Master",                   component: amministrazione, props:false},
    {path: '/:pathMatch(.*)',  component: NotFound     }
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
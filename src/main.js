import { createApp } from 'vue'
import App from './App.vue'
import "./components/common/base.css"
import {createWebHistory, createRouter} from "vue-router";
import HomePage     from "@/components/home_page/HomePage.vue";
import NewsPage     from "@/components/news_page/NewsPage.vue";
import TeamPage     from "@/components/team_page/TeamPage.vue";
import ProgettiPage from "@/components/progetti_page/ProgettiPage.vue";
import NotFound     from "@/components/NotFound/NotFound.vue";
import Utenza       from "@/components/Utenza/LogIn.vue";
import sponsors     from "@/components/sponsor/sponsor.vue";

const routes = [
    {path: "/",                redirect:  "/home"      },
    {path: "/home",            component: HomePage     },
    {path: "/news",            component: NewsPage     },
 //   {path: "/team",            redirect:  "/team#2025" },
    {path: "/team",            component: TeamPage     , props:true},
    {path: "/progetti",        component: ProgettiPage },
    {path: "/sponsor",         component: sponsors     },
    {path: "/login",           component: Utenza       },
    {path: '/:pathMatch(.*)',  component: NotFound     }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
})

//   createApp(App).use(router).mount('#app')   <-- probblemi di sicronizzazione , pagina inizia il render prima che router sia pronto

const M = createApp(App).use(router)
router.isReady().then(() => {
    M.mount('#app')
})
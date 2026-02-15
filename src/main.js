import { createApp } from 'vue'
import App from './App.vue'
import "./components/common/base.css"
import {createMemoryHistory, createRouter} from "vue-router";
import HomePage from "@/components/home_page/HomePage.vue";
import NewsPage from "@/components/news_page/NewsPage.vue";
import TeamPage from "@/components/team_page/TeamPage.vue";
import ProgettiPage from "@/components/progetti_page/ProgettiPage.vue";

const routes = [
    {path: "/", component: HomePage},
    {path: "/home", component: HomePage},
    {path: "/news", component: NewsPage},
    {path: "/team", component: TeamPage},
    {path: "/progetti", component: ProgettiPage},

]
const router = createRouter({
    history: createMemoryHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
})

createApp(App).use(router).mount('#app')

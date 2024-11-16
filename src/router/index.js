import { createRouter, createWebHistory } from "vue-router";
import FindSmallest from '../components/FindSmallest.vue';
import HomePage from '../components/HomePage.vue';
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            redirect: "/home",
            component: HomePage
        },
        {
            path: "/home",
            name: "home",
            component: HomePage
        },
        {
            path: "/smallestnumber",
            name: "smallestnumber",
            component: FindSmallest
        }
    ]
})
export default router;
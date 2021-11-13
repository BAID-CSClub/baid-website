import {createRouter, createWebHistory} from "vue-router";
import Index from './components/Index.vue'
import Events from "./components/Events.vue";
import About from "./components/About.vue";
import Err404 from "./components/Err404.vue";
import Err5xx from "./components/Err5xx.vue";
import Gallery from "./components/Gallery.vue";
const Router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/events',
            name: "Events",
            component: Events
        },
        {
            path: '/about',
            name: "About",
            component: About
        },
        {
            path: '/gallery',
            name: "Gallery",
            component: Gallery
        },
        {
            path: '/error/404',
            name: 'Err404',
            component: Err404,
        },
        {
            path: '/error/500',
            name: 'Err5xx',
            component: Err5xx
        },
        {
            path: '/.*',
            name: "NotFound",
            redirect: '/error/404'
        }
    ]

})

export default Router;
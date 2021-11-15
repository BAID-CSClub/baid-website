import { createRouter, createWebHistory } from "vue-router";
import Index from './components/Index.vue'
import News from "./components/News.vue";
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
            path: '/news',
            name: "News",
            component: News
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
            path: '/*',
            name: 'Err404',
            component: Err404,
        },
        {
            path: '/error/500',
            name: 'Err5xx',
            component: Err5xx
        }
    ]

})

export default Router;
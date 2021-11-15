import { createRouter, createWebHistory } from "vue-router";
import Index from './views/Index.vue'
import News from "./views/News.vue";
import About from "./views/About.vue";
import Err404 from "./views/Err404.vue";
import Err5xx from "./views/Err5xx.vue";
import Gallery from "./views/Gallery.vue";
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
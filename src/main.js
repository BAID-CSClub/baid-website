import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import Router from "./router";


const messages = {
    'en-US': {
        header: {
            home: 'Home',
            about: 'About',
            news: 'News',
            gallery: 'Gallery'
        },
        common: {
            read_more: 'Read More',
            search: 'Search...'
        },
        homeAbout: {
            about_title: "Welcome to Beijing Academy International Division",
            school_info_title: "Discover Beijing Academy International Division",
            idea: "idea",
            courses: "courses",
            faculty: "faculty"
        }
    },
    'zh-CN': {
        header: {
            home: '首页',
            about: '关于我们',
            news: '新闻',
            gallery: '画廊'
        },
        common: {
            read_more: '了解更多',
            search: '搜索...'
        },
        homeAbout: {
            about_title: "欢迎来到北京中学国际部",
            school_info_title: "了解北京中学国际部",
            idea: "理念",
            courses: "环境",
            faculty: "师资"
        }
    }
};

const i18n = createI18n({
    locale: localStorage.getItem('lang'),
    fallbackLocal: 'en',
    messages
});

const app = createApp(App);

app.use(Router).use(i18n);

app.mount('#app');

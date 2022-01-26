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
            readMore: 'Read More',
            search: 'Search...'
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
            readMore: '了解更多',
            search: '搜索...'
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

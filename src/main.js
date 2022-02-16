import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import Router from "./router";
import AOS from 'aos'
import 'aos/dist/aos.css'

Promise.all([import("./languages/en-us.json"), import("./languages/zh-cn.json")]).then(data => {
    const messages = {
        'en-US': data[0],
        'zh-CN': data[1]
    };
    const i18n = createI18n({
        locale: localStorage.getItem('lang'),
        fallbackLocal: 'en',
        messages
    });
    const app = createApp(App);

    app.use(Router).use(i18n).use(AOS.init());

    app.mount('#app');
});
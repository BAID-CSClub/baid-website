import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import Router from "./router";




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

    app.use(Router).use(i18n);

    app.mount('#app');
});

// console.log(messages);





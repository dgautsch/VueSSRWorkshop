import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';
import CreateStore from '@js/store';
import App from '@components/App.vue';
import Cats from '@components/Cats.vue';
import Homepage from '@components/Homepage.vue';

Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.use(Vuex);

const routes = [{
    path: '/',
    name: 'Homepage',
    component: Homepage,
},
{
    path: '/cats',
    name: 'Cats',
    component: Cats,
}];

const messages = {
    en: {
        message: {
            hello: 'hello world',
        },
    },
};

// export a factory function for creating fresh app, router and store
// instances
export default function createApp() {

    const i18n = new VueI18n({
        locale: 'en', // set locale
        messages, // set locale messages
    });

    const router = new VueRouter({
        mode: 'history',
        base: '/',
        routes,
        // Add a new route for the data page
    });

    const store = CreateStore();

    const app = new Vue({
        i18n,
        router,
        store,
        // the root instance simply renders the App component.
        render: h => h(App),
    });

    return {
        app,
        router,
        store,
    };
}

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n'
import App from '../components/App.vue';
import Homepage from '../components/Homepage.vue';

Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.use(Vuex);

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
];

const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  }
}

// export a factory function for creating fresh app, router and store
// instances
export default function createApp () {

  const i18n = new VueI18n({
    locale: 'en', // set locale
    messages, // set locale messages
  })

  const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes,
  });

  const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })

  const app = new Vue({
    i18n,
    router,
    store,
    // the root instance simply renders the App component.
    render: h => h(App),
  });
  return { app, router, store }
};

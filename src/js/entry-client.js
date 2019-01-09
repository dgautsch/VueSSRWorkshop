import initializeClient from 'vue-ssr-build/src/entry-client';
import createApp from './app';

initializeClient(createApp, {
    // selector for where to mount the app
    appSelector: '#app',
    // Include HMR support?
    hmr: process.env.NODE_ENV === 'local',
    // Any existing initial vuex state, otherwise
    initialState: null,
    // Name of the meta tag where state is stringified
    initialStateMetaTag: null,
    // Wire up logic for route-level vuex modules?
    vuexModules: true,
    // Logger instance
    logger: console,
});

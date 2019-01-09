import initializeClient from 'vue-ssr-build/src/entry-client';
import createApp from './app';

initializeClient(createApp, {
    // selector for where to mount the app
    appSelector: '#app',
    // Include HMR support?
    hmr: process.env.NODE_ENV === 'local',
    // Name of the meta tag where state is stringified
    initialStateMetaTag: 'initial-state',
    // Wire up logic for route-level vuex modules?
    vuexModules: true,
    // Logger instance
    logger: console,
});

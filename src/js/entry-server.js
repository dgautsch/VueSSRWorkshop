import initializeServer from 'vue-ssr-build/src/entry-server';
import createApp from './app';

export default initializeServer(createApp, {
    // Wire up logic for route-level vuex modules?
    vuexModules: true,
    // Provide a function which will return a promise of all initial
    // i18n translations to be included
    i18nLoader: null,
    // Logger instance
    logger: console
});

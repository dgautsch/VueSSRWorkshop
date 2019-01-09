import initializeServer from 'vue-ssr-build/src/entry-server';
import createApp from '../js/app';

function preMiddleware(context) {
    const { request } = context;

    // Determine our baseUrl and context path
    const { headers } = request;
    const { host } = headers;
    const baseUrl = `http://${host}`;
    const baseHref = `${baseUrl}`;

    Object.assign(context, {
        isLocal: process.env.NODE_ENV === 'local',
        baseHref,
        title: 'Vue SSR Workshop',
    });

    return Promise.resolve();
}

export default initializeServer(createApp, {
    // Wire up logic for route-level vuex modules?
    vuexModules: true,
    // Provide a function which will return a promise of all initial
    // i18n translations to be included
    i18nLoader: null,
    // Logger instance
    logger: console,
    preMiddleware,
});

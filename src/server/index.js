const express = require('express');
const vueRenderer = require('vue-ssr-build/src/renderer');
const path = require('path');

const app = express();
const rootDir = path.join(__dirname, '../..');

// Static asset routes, only for local and dev environments
const staticPath = path.resolve(rootDir, 'dist/');
app.use(express.static(staticPath));

const getRenderer = (expressApp) => vueRenderer(expressApp, {
    // Local build
    isLocal: process.env.NODE_ENV === 'local',
    // Dev build
    isDev:  process.env.NODE_ENV === 'development',
    // Prod build
    isProd:  process.env.NODE_ENV === 'production',
    // Enable HMR?
    hmr: true,
    // Additional options to pass to createBundleRenderer
    rendererOpts: null,
    // The remaining must be specified as absolute paths:
    templatePath:   path.join(rootDir, 'src/index.tpl.html'),
    clientConfig:   path.join(rootDir, 'build/webpack.client.config.js'),
    serverConfig:   path.join(rootDir, 'build/webpack.server.config.js'),
    clientManifest: path.join(rootDir, 'dist/vue-ssr-client-manifest.json'),
    serverBundle:   path.join(rootDir, 'dist/vue-ssr-server-bundle.json'),
});

app.get('*', getRenderer(app));

const server = app.listen(3000, () => {
    console.info(`Server listening at http://localhost:${server.address().port}/`);
});

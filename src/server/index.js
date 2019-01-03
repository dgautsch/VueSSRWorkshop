const express = require('express');
const vueRenderer = require('vue-ssr-build/src/renderer');
const path = require('path');

const app = express();
const rootDir = path.join(__dirname, '../..');
const isLocal = process.env.NODE_ENV === 'local';
const isProd = process.env.NODE_ENV === 'production';
const isDev = !isLocal && !isProd;
const appTemplate = 'src/index.tpl.html';

// Static asset routes, only for local and dev environments
const staticPath = path.resolve(rootDir, 'dist');
app.use('/static/', express.static(staticPath));

const getRenderer = (expressApp, name, templatePath) => vueRenderer(expressApp, {
    // Local build
    isLocal,
    // Dev build
    isDev,
    // Prod build
    isProd,
    // Enable HMR?
    hmr: isLocal,
    name,
    stream: true,
    // Additional options to pass to createBundleRenderer
    rendererOpts: null,
    // The remaining must be specified as absolute paths:
    templatePath:   path.join(rootDir, templatePath),
    clientConfig:   path.join(rootDir, 'build/webpack.client.config.js'),
    serverConfig:   path.join(rootDir, 'build/webpack.server.config.js'),
    clientManifest: path.join(rootDir, 'dist/vue-ssr-client-manifest.json'),
    serverBundle:   path.join(rootDir, 'dist/vue-ssr-server-bundle.json'),
});

app.get('*', getRenderer(app, 'default', appTemplate));

const server = app.listen(3000, () => {
    console.info(`Server listening at http://localhost:${server.address().port}/`);
});

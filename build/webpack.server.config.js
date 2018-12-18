const merge = require('webpack-merge');
const getServerConfig = require('vue-ssr-build/build/webpack.client.config');
const path = require('path');

const config = {
    type: 'server',       // required (client|server)
    rootDir: path.join(__dirname, '../..'),        // required - root directory of the repo,
                          // used for aliases
    extractCss: false,    // Used to extract CSS files during production builds
    enablePostCss: false, // Enable postcss-loader
    postCssOpts: null,    // options for postcss-loader
    i18nBlocks: false,    // Boolean - include support for <i18n> blocks
                          // in components
    theme: null,          // Theme for vue-themed-style-loader
    sassLoaderData: null, // Data to pass to sass-loader
    babelLoader: false,   // Include babel-loader for transpilation
}

module.exports = merge(getServerConfig(config), {
    entry: './src/entry-server.js',
});

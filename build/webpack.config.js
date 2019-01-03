const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const rootDir = path.join(__dirname, '../');

module.exports = {
    rootDir,
    extractCss: false,    // Used to extract CSS files during production builds
    enablePostCss: false, // Enable postcss-loader
    postCssOpts: null,    // options for postcss-loader
    i18nBlocks: false,    // Boolean - include support for <i18n> blocks
                          // in components
    theme: null,          // Theme for vue-themed-style-loader
    sassLoaderData: null, // Data to pass to sass-loader
    babelLoader: true,    // Include babel-loader for transpilation
    output: {
        path: path.resolve(rootDir, './dist'),
        publicPath: '/static/',
    },
    plugins: [
        // Copy our static/ assets over to the dist folder as well so they can
        // be served up through static/ routes
        new CopyWebpackPlugin([{
            from: `static/**`,
            flatten: true,
        }], {
            debug: 'info',
        }),
    ],
}
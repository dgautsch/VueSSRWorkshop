const merge = require('webpack-merge');
const getClientConfig = require('vue-ssr-build/build/webpack.client.config');
const sharedConfig = require('./config');
const mergedConfig = Object.assign({}, {
    type: 'client',
}, sharedConfig);

module.exports = merge(getClientConfig(mergedConfig), {
    entry: {
        app: './src/js/entry-client.js',
    },
    output: {
        filename: '[name].js',
        chunkFilename: 'async/[name].js',
    },
});

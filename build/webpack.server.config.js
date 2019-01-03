const merge = require('webpack-merge');
const getServerConfig = require('vue-ssr-build/build/webpack.server.config');
const sharedConfig = require('./config');
const mergedConfig = Object.assign({}, {
    type: 'server',
    babelLoader: false,
}, sharedConfig);

module.exports = merge(getServerConfig(mergedConfig), {
    entry: './src/server/entry-server.js',
    devtool: 'none',
});

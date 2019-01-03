const merge = require('webpack-merge');
const getServerConfig = require('vue-ssr-build/build/webpack.server.config');
const sharedConfig = require('./webpack.config');
const mergedConfig = Object.assign({}, {
    type: 'server',
}, sharedConfig);
console.log(mergedConfig);

module.exports = merge(getServerConfig(mergedConfig), {
    entry: './src/server/entry-server.js',
    devtool: 'none',
});

const baseConfig = require('vue-ssr-build/.eslintrc');

module.exports = Object.assign(baseConfig, {
    root: true,
    plugins: [
        ...baseConfig.plugins,
    ],
    extends: [
        ...baseConfig.extends,
    ],
    rules: Object.assign(baseConfig.rules, {
        complexity: ['error', 8],
        'max-depth': ['error', { max: 3 }],
        'max-lines': ['error', {
            max: 500,
            skipBlankLines: false,
            skipComments: true,
        }],
        'max-lines-per-function': ['error', 75],
        'max-nested-callbacks': ['error', { max: 3 }],
        'max-params': ['error', { max: 5 }],
        'import/no-unresolved': ['error', {
            commonjs: true,
            ignore: ['^@', '\\.svg\\?inline$'],
        }],
        'vue/attribute-hyphenation': ['error', 'never'],
        'vue/max-attributes-per-line': ['error', {
            singleline: 3,
            multiline: {
                max: 1,
                allowFirstLine: false,
            },
        }],
    }),
});

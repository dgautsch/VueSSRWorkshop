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
        // Max cyclomatic complexity per function
        complexity: ['error', 8],

        // Max depth that blocks can be nested
        'max-depth': ['error', { max: 3 }],

        // Max lines per file
        'max-lines': ['error', {
            max: 500,
            skipBlankLines: false,
            skipComments: true,
        }],

        // Max lines per function
        'max-lines-per-function': ['error', 75],

        // Max number of nested callbacks allowed
        'max-nested-callbacks': ['error', { max: 3 }],

        // Max number of params allowed for a function
        'max-params': ['error', { max: 5 }],

        // This exists in vue-ssr-build but we re-declare this here so we can
        // ignore resourceQueries for inline SVG's
        'import/no-unresolved': ['error', {
            commonjs: true,
            ignore: ['^@', '\\.svg\\?inline$'],
        }],

        // Do not allow hyphenated prop attributes for custom components
        'vue/attribute-hyphenation': ['error', 'never'],

        // This rule is added in 5.0 and should already be strongly recommended,
        // so this can likely be deleted but keeping here just in case
        // 'vue/component-name-in-template-casing': ['error', 'PascalCase' ],

        // Allow max 3 attributes on a single line element, but once the
        // element is spread across multiple, require one attribute per line
        // starting on a new line
        'vue/max-attributes-per-line': ['error', {
            singleline: 3,
            multiline: {
                max: 1,
                allowFirstLine: false,
            },
        }],
    }),
});

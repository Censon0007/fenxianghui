module.exports = {
    plugins: {
        'postcss-import': {},
        'cssnano': {},
        'postcss-atroot': {}, // 在css中使用scss语法。
        'postcss-property-lookup': {}, // 在css中使用scss语法。
        'postcss-nested': {}, // 在css中使用scss语法。
        'postcss-nested-ancestors': {}, // 在css中使用scss语法。
        'postcss-calc': {}, // 在css中使用scss语法。
        'postcss-sass-color-functions': {}, // 在css中使用scss语法。
        'lost': false, // 在css中使用scss语法。
        'postcss-utils': {}, // 在css中使用scss语法。
        'postcss-preset-env': { // 允许您将现代CSS转换为大多数浏览器可以理解的内容，根据您的目标浏览器或运行时环境确定所需的polyfill。
            stage: 2,
        },
    }
}
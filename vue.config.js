const px2rem = require('postcss-px2rem')
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',

    pages: {
        index: 'src/main.js'
    },

    chainWebpack: (config) => {
        config.module.rule = [{
            test: /\.css$/,
            use: [
                'style-loader',
                { loader: 'css-loader', options: { importLoaders: 1 } },
                'postcss-loader',
                'sass-loader'
            ]
        }]
    },

    configureWebpack: {
        plugins: [],
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },

    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    px2rem({
                        remUnit: 37.5 // 设计稿等分后的rem值   375/10
                    })
                ]
            },
            stylus: {
                'resolve url': true,
                'import': []
            }
        }
    },

    pluginOptions: {
        'cube-ui': {
            postCompile: true,
            theme: false
        }
    }
}
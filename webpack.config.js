const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: 'development',

    entry: './src/index.js',

    output: {
        path: `${__dirname}/dist`,
        filename: 'main.js'
    },

    // ローダーの設定
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader'],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
            // 拡張子 .js の場合
            test: /\.js$/,
            use: [{
                // Babel を利用する
                loader: 'babel-loader',
                // Babel のオプションを設定する
                options: {
                    presets: [
                        // プリセットを指定。ES2020 を ES5 に変換
                        '@babel/preset-env',
                    ],
                },
            }, ],
        }, ],
    },

    // import文で .ts ファイルを解決するため
    resolve: {
        // Webpackで利用する時の設定
        alias: {
            vue$: 'vue/dist/vue.esm.js',
        },
        // 拡張子の省略
        extensions: ['*', '.js', '.vue', '.json'],
    },

    plugins: [
        // Vueを読み込めるようにするため
        new VueLoaderPlugin(),
    ],

    // ES5(IE11等)向けの設定
    target: ['web', 'es5'],

    devServer: {
        static: "dist",
        open: true
    }
}
const VueLoaderPlugin = require('vue-loader');

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

        // resolveから。
    },

    // ES5(IE11等)向けの設定
    target: ['web', 'es5'],

    devServer: {
        static: "dist",
        open: true
    }
}
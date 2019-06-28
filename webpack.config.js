const path = require('path');
const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules :[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    mode: 'development',
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        open: true,
        hot: true,
        inline: true
    },
    devtool: 'source-map'
};

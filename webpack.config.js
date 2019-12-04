const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/'
    },
    module: {
        rules: [
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
        historyApiFallback: true,
        open: true,
        hot: true,
        inline: true,
        openPage: ''
    },
    devtool: 'source-map'
}

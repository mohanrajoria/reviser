const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/templates/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: './src/scripts/index.js',
    output: {
        path: path.resolve('build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    plugins: [HtmlWebpackPluginConfig],
    devServer: {
        port: 7000
    }
}

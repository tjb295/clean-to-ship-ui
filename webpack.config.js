var HTMLWebPackPlugin = require('html-webpack-plugin');

var HTMLWebPackPluginConfig = new HTMLWebPackPlugin({
    template: __dirname + '/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: __dirname + '/src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        filename: 'transformed.js',
        path: __dirname + '/backend/build'
    },
    plugins: [HTMLWebPackPluginConfig]
};
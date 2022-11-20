const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
        {
            test: /\.css$/,
            use: [
            {
                loader: 'style-loader'
            },
            {
                loader: 'css-loader'
            }
            ]
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
            {
                loader: 'file-loader'
            }
            ]
        },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        favicon: "./src/img/easycooking-icon.png"
        })
    ]
};
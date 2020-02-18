const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './dist',
    },
    entry: {
        app: ['./src/js/']
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'src/html/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
};
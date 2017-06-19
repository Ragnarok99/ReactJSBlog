const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './source/server.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname,'../built/server'),
    },
    module:{
        loaders: [
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
            {
                test: /\.jsx?$/,//if is js or jsx use babel
                loader: 'babel-loader',
                exclude: /{node_modules}/,
                query: {
                    presets: ['es2016', 'es2017', 'react'],
                    plugins: ["transform-es2015-modules-commonjs"]

                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader?modules'})
            }
        ]

    },
    target: 'node',
    plugins: [new ExtractTextPlugin('../statics/styles.css')]

};

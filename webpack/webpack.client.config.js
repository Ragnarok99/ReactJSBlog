const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './source/client.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, '../built/statics')
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.jsx?$/, //if is js or jsx use babel
                loader: 'babel-loader',
                exclude: /{node_modules}/,
                query: {
                    presets: ['latest-minimal', 'react']
                }
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader?modules'})
            }
        ]

    },
    target: 'web',
    plugins: [new ExtractTextPlugin('../statics/styles.css')]
};

const path = require('path');

module.exports = {
    entry: './source/client.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname,'../built/statics'),
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
                    presets: ['latest-minimal', 'react']
                }
            }
        ]

    },
    target: 'web',
};

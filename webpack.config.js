var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './client/js'
    ],
    resolve: {
        modulesDirectories: ['node_modules', 'client/js/src'],
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, 'bin'),
        filename: 'client.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"dev"'
            }
        })
    ]
};

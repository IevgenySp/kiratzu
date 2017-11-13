var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './client/js'
    ],
    resolve: {
        //modulesDirectories: ['node_modules', 'client/js/src'],
        extensions: ['.es6', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, 'bin'),
        filename: 'client.min.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};

const path = require('path');
require('@babel/register')();
require('@babel/preset-env');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@types': path.resolve(__dirname, 'src/types')
        }
    },
    devServer: {
        contentBase: path.join(__dirname),
        host: 'localhost',
        port: 3000
    }
};
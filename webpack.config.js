const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //plugin - generate an HTML5 file that includes all your webpack bundles

module.exports = {
    mode: 'development',  //production
    entry: {
        main: path.resolve(__dirname, './src/app.js'),
    },  
    output: {
        filename: '[name].[contenthash].js',  //unique name, eg: (main.30a6bh.bundle.js) , [name]=main, [contenthash]=some43random24
        path: path.resolve(__dirname, 'dist'),
        clean: true, //cleans the dist folder
    },

    //Loaders


    //Plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: 'just a demo',
            filename: 'index.html',
        }),
    ],
};

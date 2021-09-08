const HtmlWebpack    = require('html-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin     = require("copy-webpack-plugin");
module.exports = {
    
    mode: "development",

    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                //excluir para poder tomar en cuente la siguiente regla. Una vez que se cumple una regla, ya no se toma en cuenta la siguiente regla que tambien cumple la condicion.
                exclude: /styles.css$/,
                use: [ 'style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [ MiniCssExtract.loader, 'css-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            }


        ]
    },

    plugins: [
        new HtmlWebpack({
            title: 'Mi Webpack App',
            //El nombre del archivo index.html. Se lo puede cambiar aqui. Por defecto index.html
            // filename: 'index.html',
            //Cual archivo se va copiar
            template: './src/index.html'
        }),
        new MiniCssExtract({
            //usar el mismo nombre. Tambien se puede cambiar
                filename: '[name].css',
                ignoreOrder: false
            }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets/', to: 'assets/' }
            ]
        })
    
    ]
}



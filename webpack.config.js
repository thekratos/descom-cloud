var path = require('path');
/*
 * Creamos una variable, para traer plugin HTML
 * Este plugin permite exportar codigo HTML
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');

module.exports = {
    // Seleccionamos el archivo js principal
    entry: './src/main.js',
    // Aqui definimos el nombre y la ruta donde se exportara todo el js
    output: {
        /*
         * Definimos donde se va a guardar el archivo
         *
         * dirname busca el directorio donde esta la carpeta del proyecto actual
        */
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          // Para cargar archivos css dentro de javascript
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          // Para cargar archivos html dentro de javascript, por medio de un string
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
          // Para cargar svg
          {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
          }
        ],
      },
    plugins: [
        new HtmlWebpackPlugin({
            // Doy la direccion del archivo html
            template: './src/index.html'
        }),
    ],
    //Configurar el servidor de desarrollo
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
    },
    mode: "production",
};
// Punto de entrada

const path = require('path')

module.exports = {
        // Punto de entrada
        entry: './src/index.js',
        // Punto de salida
        output: {
                path: path.resolve(__dirname, 'dist'),
                // Nombre del archivo
                filename: 'main.js'

        },
        // Extensiones
        resolve:{
                extensions: ['.js']
        },
        module: {
                rules: [
                        {
                                        // Saber tipo de extensiones
                        test: /\.m?js$/,
                                        // Se excluyen los modulos de node
                        exclude: /node_modules/,
                        use: {
                                loader: 'babel-loader'
                        }
                        }
                ]
        },
}
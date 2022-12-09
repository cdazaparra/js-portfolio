# js-portfolio


npm install webpack webpack-cli -D


# Prepara la compilación de las configuraciones
npx webpack --mode production --config webpack.config.js

# Se deben instalar los pluggins de Babel

Permite trabajar con asincronismo

npm install  babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime -D

# Para poder trabajar con html

npm install html-webpack-plugin -D

# Reconocer css

npm install mini-css-extract-plugin css-loader -D

# instalaer sass

npm install scss scss-loader -D

#  Para usar imagenes

npm install copy-webpack-plugin -D

# Para usar fuentes

npm install url-loader file-loader -D

# Minimizar css y js

npm install css-minimizer-webpack-plugin terser-webpack-plugin -D

# Variables de entorno

npm install dotenv-webpack -D

Se crea un .env que tiene las variables y no forma parte del repositorio
Se crea un .env-example que tiene los ejemplos de las variables

# Limpiar webpack

npm install clean-webpack-plugin -D

# Se crea un archivo para poner en produccion

netlify.tom

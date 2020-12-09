const path = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin');  
  
module.exports = {  
   entry: './client/index.jsx',  
   output: {  
      path: path.join(__dirname, '/client/bundle'),  
      filename: 'index_bundle.js'  
   },  
   module: {  
      rules: [  
         {  
            test: /\.jsx?$/,  
            exclude: /node_modules/,  
        use: {  
              loader: "babel-loader",  
              options: {
               presets: ['react']
             }
            }  
         }  
      ]  
   },  
   plugins:[  
      new HtmlWebpackPlugin({  
         template: './client/index.html'  
      })  
   ]  
}  
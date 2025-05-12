const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/components/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
      },
      resolve: {
        extensions: ['.js', '.jsx'],
        alias:{
            '@': path.resolve(__dirname, 'src'),
        }
      },
      module: {
        rules: [
          {
            test: /\.(?:js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-react']
                ]
              }
            }
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          
        ]
        
      },
       plugins: [new HtmlWebpackPlugin({
        template:'./Public/index.html',
        path: 'index.html'
       })],
       
  };
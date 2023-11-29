const webpack = require('webpack');
const path = require('path');
//console.log(process.env, 'PROCESS.ENV')

const config = {
  mode: 'development',
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', 
    assetModuleFilename:'[name][ext]', 
    clean:true
  },
 devtool: 'inline-source-map', 
  module: {
    rules: [
      {
        exclude: /node_modules|cdn_modules/, 
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        /*
        options:{
          presets:["@babel/preset-env", "@babel/preset-react"], 
          modules:false
        }
        */
      }, 
      {
        test: /\.css$/,
        use: [
                'style-loader', 'css-loader'
                ]
      }, 
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      
    ]
  },

  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
    modules:[
      'node_modules', 
     path.join(process.env.npm_config_prefix || __dirname, 'lib/node_modules')
    ]
  },
  resolveLoader: {
    modules:[
      'node_modules', 
     path.join(process.env.NPM_CONFIG_PREFIX || __dirname, 'lib/node_modules')
    ]
  },
  devServer: {
    port: 9950,
    static: {
      directory: './dist'
    }
  }
};

module.exports = config;

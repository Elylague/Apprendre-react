const express = require('express');
//const webpack = require('webpack');
//const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const PORT=process.env.PORT || 8080
app.get('api', (req, res)=> {
  res.json({firstName:'Elysée', lastName:'Laguerre'})
  
})
//const config = require('./webpack.config.js');
//const compiler = webpack(config);
//console.log(compiler, 'compiler')
// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
/*
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);
*/
// Serve the files on port 3000.
app.listen(PORT, function() {
  console.log('Example app listening on port 3000!\n');
});
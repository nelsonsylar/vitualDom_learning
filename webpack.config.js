const {resolve} = require('path')
module.exports={
  entry:resolve(__dirname,'./src/index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  mode:'development',
  devtool: "source-map" 
}
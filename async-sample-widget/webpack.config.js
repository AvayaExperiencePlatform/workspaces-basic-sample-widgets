const path = require('path');
const copyPlugin = require('copy-webpack-plugin');

module.exports = {

  mode: 'production',
  entry: path.resolve(__dirname, 'async-sample-widget.js'),
  watch: false,

  output: {
    library: 'asyncSampleWidget',
    path: path.resolve(__dirname, 'dist'),
    filename: 'async-sample-widget.js',
  }
};

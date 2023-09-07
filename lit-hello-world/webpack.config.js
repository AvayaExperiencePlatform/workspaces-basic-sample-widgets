const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'lit-hello-world.js'),
  output: {
    library: 'litHelloWorld',
    path: path.resolve(__dirname, 'dist'),
    filename: 'lit-hello-world.js',
  },
};
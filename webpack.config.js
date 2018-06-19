var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-library-starter-kit.js',
    library: 'webpackLibraryStarterKit',
    libraryTarget: 'umd'
  }
};

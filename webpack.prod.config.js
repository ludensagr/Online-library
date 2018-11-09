/**
 * Webpack Production Config
 */
let testingConfig = require('./webpack.testing.config');

const config = {
  publicPath: 'http://127.0.0.1:3000/'
};

module.exports = Object.assign(testingConfig, {
  mode: 'production',
  output: {
    path: __dirname + '/build',
    publicPath: config.publicPath,
    filename: 'static/[name].[chunkhash:8].js',
    chunkFilename: 'static/[name].[chunkhash:8].js'
  }
});

// script to enable webpack-bundle-analyzer
process.env.NODE_ENV = 'production';
const webpack = require('webpack');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const getWebpackConfig = require('react-scripts/config/webpack.config.js');
const webpackConfig = getWebpackConfig('production');

webpackConfig.plugins.push(new BundleAnalyzerPlugin());

// actually running compilation and waiting for plugin to start explorer
webpack(webpackConfig, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error(err);
  }
});

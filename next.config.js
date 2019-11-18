const Dotenv = require('dotenv-webpack');
const withImages = require('next-images');

require('dotenv').config();

const { publicRuntimeConfig } = require('./next.runtimeConfig');

module.exports = withImages({
  assetPrefix: publicRuntimeConfig.GITHUB
    ? `/${publicRuntimeConfig.PROJ_NAME}/`
    : '',
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      query: { page: '/query' },
      reissue: { page: '/reissue' },
    };
  },
  webpack: function(config) {
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        systemvars: true,
      }),
    ];
    return config;
  },
  publicRuntimeConfig,
});

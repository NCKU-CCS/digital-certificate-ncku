const Dotenv = require('dotenv-webpack');
const withImages = require('next-images');
const PROJ_NAME = 'digital-certificate-ncku';
const GITHUB = process.env.DEPLOY_ENV === 'github';

require('dotenv').config();

module.exports = withImages({
  assetPrefix: GITHUB ? `/${PROJ_NAME}/` : '',
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
});

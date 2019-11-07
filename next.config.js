const withImages = require('next-images');
const PROJ_NAME = 'digital-certificate-ncku';
const GITHUB = process.env.DEPLOY_ENV === 'github';

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
    return config;
  },
});

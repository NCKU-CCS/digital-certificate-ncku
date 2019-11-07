const PROJ_NAME = 'digital-certificate-ncku';
const GITHUB = process.env.DEPLOY_ENV === 'github';

module.exports = {
  assetPrefix: GITHUB ? `/${PROJ_NAME}/` : '',
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      query: { page: '/query' },
      reissue: { page: '/reissue' },
    };
  },
};

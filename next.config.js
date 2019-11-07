module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      query: { page: '/query' },
      reissue: { page: '/reissue' },
    };
  },
};

const publicRuntimeConfig = {
  GITHUB: process.env.DEPLOY_ENV === 'github',
  PROJ_NAME: 'digital-certificate-ncku',
  MAIN_HOST: process.env.MAIN_HOST,
  NCKU_HOST: process.env.NCKU_HOST,
};

module.exports = {
  publicRuntimeConfig,
};

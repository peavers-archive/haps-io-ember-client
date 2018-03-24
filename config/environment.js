/* eslint-env node */

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'haps-ember-client',
    podModulePrefix: 'haps-ember-client/features',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',

    EmberENV: {
      EXTEND_PROTOTYPES: {
        Date: false
      }
    },

    APP: {
      HAPS: 'https://api.haps.io'
    }
  };

  if (environment === 'development') {
    ENV.APP.HAPS = "http://localhost:8080"
  }

  return ENV;
};

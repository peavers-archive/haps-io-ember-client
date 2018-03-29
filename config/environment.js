'use strict';

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

  ENV['ember-simple-auth'] = {
    authenticationRoute: '/',
    routeAfterAuthentication: 'news',
    routeIfAlreadyAuthenticated: 'news',
    auth0: {
      clientID: 'cO1P3T7TKDzT6FGozI4QqAkQAi86axdf',
      domain: 'peavers.au.auth0.com'
    }
  };


  if (environment === 'development') {
    ENV.APP.HAPS = "http://localhost:8080"
  }

  return ENV;
};

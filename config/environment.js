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

    moment: {
      includeTimezone: 'all'
    },

    APP: {
      HAPS: 'https://q5opka4cj0.execute-api.ap-southeast-2.amazonaws.com/Prod',
      PUSHER_KEY: 'a4db97927c0123c43fe8',
      PUSHER_SECRET: '6cc2e1a762ff175c4f68'
    }
  };

  ENV['ember-simple-auth'] = {
    authenticationRoute: '/feeds',
    routeAfterAuthentication: 'feeds',
    routeIfAlreadyAuthenticated: 'feeds',
    auth0: {
      clientID: 'cO1P3T7TKDzT6FGozI4QqAkQAi86axdf',
      domain: 'peavers.au.auth0.com'
    }
  };

  if (environment === 'development') {
    ENV.APP.HAPS = "https://q5opka4cj0.execute-api.ap-southeast-2.amazonaws.com/Prod"
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};

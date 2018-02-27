import Ember from 'ember';

const {
  Controller,
  inject: {
    service
  },
  get
} = Ember;

export default Controller.extend({

  currentUser: service(),
  session: service(),

  actions: {
    login() {
      const lockOptions = {
        theme: {
          logo: 'https://haps.io/assets/favicon-4bffc8bcbd4a4850e47bb9de7db7a61a.png',
          primaryColor: '#757ffc',
        },
        languageDictionary: {
          title: "haps.io login"
        },
        autoclose: true,
        autofocus: true,
        closable: true,
        
        auth: {
          oidcConformant: true,
          hashCleanup: true,
          auth: {
            redirect: true,
            params: {
              scope: 'openid profile email user_metadata',
            },
          }
        }
      };

      get(this, 'session').authenticate('authenticator:auth0-lock', lockOptions);
    },

    logout() {
      get(this, 'session').invalidate();
    }
  }
});

import Ember from 'ember';

const {

  inject: {
    service
  },
  get
} = Ember;

export default Ember.Component.extend({

  actions: {
    login() {
      this.sendAction('login')
    },

    logout() {
      this.sendAction('logout')
    }
  }

});

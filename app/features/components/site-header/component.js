import Component from '@ember/component';

export default Component.extend({

  actions: {
    login() {
      this.sendAction('login')
    },

    logout() {
      this.sendAction('logout')
    }
  }


});

import Component from '@ember/component';

export default Component.extend({


  hasBodyDisplayed: false,

  actions: {
    toggleBody() {
      return this.toggleProperty('hasBodyDisplayed')
    }
  }

});

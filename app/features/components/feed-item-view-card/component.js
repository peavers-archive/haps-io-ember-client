import Component from '@ember/component';

export default Component.extend({

  tagName: "",
  hasBodyDisplayed: false,

  actions: {
    toggleBody() {
      return this.toggleProperty('hasBodyDisplayed')
    }
  }

});

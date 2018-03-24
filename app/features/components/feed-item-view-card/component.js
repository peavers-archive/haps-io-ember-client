import Ember from 'ember';

export default Ember.Component.extend({

  tagName: "",
  hasBodyDisplayed: false,

  actions: {
    toggleBody() {
      return this.toggleProperty('hasBodyDisplayed')
    }
  }

});

import Ember from 'ember';

export default Ember.Component.extend({

  tagName:"",

  actions: {
    setView(view) {
      this.sendAction('setView', view);
    }
  }

});

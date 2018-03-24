import Ember from 'ember';
import {get, set, computed} from '@ember/object';

export default Ember.Component.extend({

  tagName: "",

  isSeen: false,

  hasBodyDisplayed: false,

  actions: {
    seen(feedItem) {
      this.sendAction('seen', feedItem);

      feedItem.unloadRecord();
    },

    toggleBody() {
      return this.toggleProperty('hasBodyDisplayed')
    }
  }

});

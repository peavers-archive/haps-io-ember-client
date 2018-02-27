import Ember from 'ember';
import {set, get} from '@ember/object';

export default Ember.Component.extend({

  tagName: "",

  isSeen: false,

  actions: {
    seen(feedItem) {
      // this.sendAction('seen', feedItem);

       feedItem.unloadRecord();
    }
  }

});

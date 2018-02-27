import Ember from 'ember';
import {computed, get, set} from '@ember/object'

export default Ember.Component.extend({
  tagName: "",
  infinityLoadAction: 'infinityLoad',

  actions: {
    seen(feedItem) {
      this.sendAction('seen', feedItem);
    },

    infinityLoad(infinityModel) {
      this.sendAction('infinityLoadAction', infinityModel);
    }
  }
});

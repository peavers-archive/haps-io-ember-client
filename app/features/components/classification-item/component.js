import Component from '@ember/component';
import {get, set} from '@ember/object';
import Ember from 'ember';

export default Component.extend({

  tagName: "",
  ajax: Ember.inject.service(),

  actions: {
    filter(data) {
      const item = get(this, 'item');
      set(item, 'state', data);
    }
  },

});

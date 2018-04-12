import Component from '@ember/component';
import {computed, get, set} from '@ember/object';

export default Component.extend({
  tagName: "",
  infinityLoadAction: 'infinityLoad',

  actions: {
    infinityLoad(infinityModel) {
      this.sendAction('infinityLoadAction', infinityModel);
    },
  }
});

import Component from '@ember/component';
import {get, set} from '@ember/object';

export default Component.extend({

  tagName: "",

  didReceiveAttrs() {
    this._super(...arguments);

    const userClassifications = get(this, 'user.classification');
    const item = get(this, 'item');

    if (userClassifications.includes(item)) {
      set(item, 'state', true);
    }
  },

  actions: {
    filter(data) {
      const item = get(this, 'item');
      const user = get(this, 'user');

      set(item, 'state', data);

      if (data) {
        user.get('classification').pushObject(item);
      } else {
        user.get('classification').removeObject(item);
      }

      user.save();

    },
  }
});

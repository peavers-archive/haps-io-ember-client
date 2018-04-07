import Component from '@ember/component';
import {get, set, computed} from '@ember/object';
import classification from "../../../models/classification";

export default Component.extend({

  tagName: "",

  state: false,

  didReceiveAttrs() {
    this._super(...arguments);

    const item = get(this, 'item');
    const userClassifications = get(this, 'user.classification');

    if (userClassifications.includes(item)) {
      set(this, 'state', true);
    } else {
      set(this, 'state', false);
    }
  },

  actions: {
    toggleClassification(data) {
      const user = get(this, 'user');
      const item = get(this, 'item');

      if (data) {
        user.get('classification').then((classification) => {
          classification.pushObject(item);
          user.save();
        });

        set(this, 'state', true);
      } else {
        user.get('classification').then((classification) => {
          classification.removeObject(item);
          user.save();
        });

        set(this, 'state', false);
      }
    },
  }
});

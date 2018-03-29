import Component from '@ember/component';
import {get, set} from '@ember/object';

export default Component.extend({

  didReceiveAttrs() {
    this._super(...arguments);

    const item = get(this, 'item');
    const userClassifications = get(this, 'user.classification');
    const itemClassifications = get(item, 'classification');

    if (userClassifications) {
      userClassifications.forEach(function (value) {
        if (itemClassifications.includes(value)) {
          item.unloadRecord();
        }
      });
    }
  },

  hasBodyDisplayed: false,

  actions: {
    toggleBody() {
      return this.toggleProperty('hasBodyDisplayed')
    }
  }

});

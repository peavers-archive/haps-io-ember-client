import Component from '@ember/component';
import {get, set} from '@ember/object';

export default Component.extend({

  tagName: "",

  actions: {
    filter(data) {
      const item = get(this, 'item');
      set(item, 'state', data);

      this.sendAction('filter', item);
    }
  }

});

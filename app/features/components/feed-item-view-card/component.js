import Component from '@ember/component';
import {get, set} from '@ember/object';
import {inject as service} from '@ember/service';

export default Component.extend({
  hasBodyDisplayed: false,
  hasBeenHidden: false,
  hasBeenRead: false,
  hasMouseInside: false,

  mouseEnter() {
    set(this, 'hasMouseInside', true)
  },

  mouseLeave() {
    set(this, 'hasMouseInside', false)
  },

  didReceiveAttrs() {
    this._super(...arguments);

    const item = get(this, 'item');
    const userRead = get(this, 'user.read');

    if (userRead) {
      if (userRead.includes(item)) {
        set(this, 'hasBeenRead', true);
      }
    }
  },

  actions: {
    toggleBody() {
      this.toggleProperty('hasBodyDisplayed')

      const user = get(this, 'user');

      if (user) {
        const item = get(this, 'item');

        user.get('read').then((read) => {
          read.pushObject(item);
          user.save();
        });

        set(this, 'hasBeenRead', true);
      }
    },

    read() {
      const user = get(this, 'user');

      if (user) {
        const item = get(this, 'item');

        user.get('read').then((read) => {
          read.pushObject(item);
          user.save();
        });

        set(this, 'hasBeenRead', true);
      }
    },

    hide() {
      const user = get(this, 'user');
      const item = get(this, 'item');

      user.get('hidden').then((hidden) => {
        hidden.pushObject(item);
        user.save();
      });

      set(this, 'hasBeenHidden', true);

    }
  }

});

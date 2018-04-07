import Component from '@ember/component';
import {get, set, computed} from '@ember/object';

export default Component.extend({
  hasBodyDisplayed: false,
  hasMouseInside: false,

  mouseEnter() {
    set(this, 'hasMouseInside', true)
  },

  mouseLeave() {
    set(this, 'hasMouseInside', false)
  },

  hiddenStatus: computed('user.hidden', function () {
    const item = get(this, 'item');
    const userHidden = get(this, 'user.hidden');

    if (userHidden) {
      if (userHidden.includes(item)) {
        return true;
      }
    }
  }),

  readStatus: computed('user.read', function () {
    const item = get(this, 'item');
    const userRead = get(this, 'user.read');

    if (userRead) {
      if (userRead.includes(item)) {
        return true;
      }
    }
  }),

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

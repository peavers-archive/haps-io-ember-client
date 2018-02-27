import {computed, get} from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  tagName: 'div',
  classNames: ['type-item column is-6'],
  classNameBindings: ['selected'],

  selected: computed('selectedType', function () {
    return get(this, 'selectedType.title') === get(this, 'title');
  }),

  actions: {
    toggleActiveType() {
      this.sendAction('toggleActiveType', this);
    },
  }

});

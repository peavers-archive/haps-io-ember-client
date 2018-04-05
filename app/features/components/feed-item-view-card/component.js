import Component from '@ember/component';
import {get, set} from '@ember/object';

export default Component.extend({

  hasBodyDisplayed: false,
  hasBeenRead: false,

  actions: {
    toggleBody() {

      console.log("called");

      return this.toggleProperty('hasBodyDisplayed')
    },

    read(newsItem) {
      this.toggleProperty('hasBeenRead');

      let user = get(this, 'user');
      get(user, 'read').pushObject(newsItem);
      user.save();
    }
  }

});

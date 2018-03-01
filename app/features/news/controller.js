import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import {computed, get, set} from '@ember/object';

export default Controller.extend({
  currentUser: service(),
  session: service(),

  // viewType: computed(function () {
  //   if (get(this, 'session.isAuthenticated')) {
  //     return get(this, 'currentUser.user.view');
  //   } else {
  //     return "card";
  //   }
  // }),

  viewType: "card",

  actions: {
    setView(view) {
      set(this, 'viewType', view);
    },

    seen(feedItem) {
      get(this, 'store').unloadRecord(feedItem);
    },

  }
})
;

import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import {computed, get, set} from '@ember/object';
import EmberPusher from "ember-pusher";

export default Controller.extend(EmberPusher.Bindings, {
  currentUser: service(),
  session: service(),
  pusher: service(),

  viewType: computed(function () {
    if (get(this, 'session.isAuthenticated')) {
      return get(this, 'currentUser.user.view');
    } else {
      return "card";
    }
  }),

  actions: {
    setView(view) {
      set(this, 'viewType', view);
    },

    seen(feedItem) {
      const profile = get(this, 'session.data.authenticated.profile');
      const currentUser = get(this, 'store').peekRecord('user', get(profile, 'sub'));

      get(feedItem, 'seenBy');

      feedItem.save();
    },
  }
});

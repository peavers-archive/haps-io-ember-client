import Ember from 'ember';
import {get, set} from '@ember/object';
import {inject as service} from '@ember/service';
import RSVP from "rsvp";

export default Ember.Service.extend({
  session: service('session'),
  store: service(),

  load() {
    if (get(this, 'session.isAuthenticated')) {
      const profile = get(this, 'session.data.authenticated.profile');

      return get(this, 'store').queryRecord('user', {sub: get(profile, 'sub')}).catch((error) => {
        set(this, 'user', this.create(profile));
      }).then((user) => {
        set(this, 'user', user);
      });
    } else {
      return RSVP.resolve();
    }
  },

  create(profile) {

    console.log("new users: " + profile);

    return get(this, 'store').createRecord('user', {
      email: get(profile, 'email'),
      sub: get(profile, 'sub'),
      view: 'card'
    }).save();
  }

});

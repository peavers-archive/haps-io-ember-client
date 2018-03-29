import Route from '@ember/routing/route';
import RSVP from "rsvp";
import InfinityRoute from "ember-infinity/mixins/route";
import {get} from "@ember/object";
import {inject as service} from '@ember/service';

export default Route.extend(InfinityRoute, {

  session: service(),

  model() {
    if (get(this, 'session.data.authenticated.profile.email')) {
      return RSVP.hash({
        user: get(this, 'store').queryRecord('user', {email: get(this, 'session.data.authenticated.profile.email')}),
      });
    }
  },

  setupController(controller, models) {
    controller.setProperties(models);
  },

});

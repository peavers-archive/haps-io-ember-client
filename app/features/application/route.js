import Route from '@ember/routing/route';
import RSVP from "rsvp";
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

import {get} from "@ember/object";
import {inject as service} from '@ember/service';

export default Route.extend(ApplicationRouteMixin, {

  session: service(),

  model() {
    return RSVP.hash({
      user: get(this, 'store').queryRecord('user', {email: get(this, 'session.data.authenticated.profile.email')}),
    }).catch(() => {
      console.log(">> Hey there pal, login to set custom filters :)");
    });
  },

  setupController(controller, models) {
    controller.setProperties(models);
  },

});

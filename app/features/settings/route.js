import Route from '@ember/routing/route';
import RSVP from "rsvp";
import InfinityRoute from "ember-infinity/mixins/route";
import {get} from "@ember/object";

export default Route.extend({

  model(param) {
    return RSVP.hash({
      user: get(this, 'store').findRecord('user', param.user_id),
      classifications: get(this, 'store').findAll('classification'),
    });
  },

  setupController(controller, models) {
    controller.setProperties(models);
  },

});

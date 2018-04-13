import Route from '@ember/routing/route';
import RSVP from "rsvp";
import InfinityRoute from "ember-infinity/mixins/route";
import {get} from "@ember/object";
import {inject as service} from '@ember/service';

export default Route.extend(InfinityRoute, {

  session: service(),

  model(param) {
    const infinity = this.infinityModel("classification", {
      perPage: 100,
      startingPage: 0,
      modelPath: 'controller.settings'
    });

    return RSVP.hash({
      user: get(this, 'store').findRecord('user', param.user_id),
      classifications: infinity
    });
  },

  setupController(controller, models) {
    controller.setProperties(models);
  },

});

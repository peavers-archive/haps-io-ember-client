import Route from '@ember/routing/route';
import RSVP from "rsvp";
import {computed, get, set} from '@ember/object';
import {inject as service} from '@ember/service'
import InfinityRoute from "ember-infinity/mixins/route";

export default Route.extend(InfinityRoute, {
  session: service(),

  model(params) {
    return RSVP.hash({
      newsItems: this.infinityModel("newsItem", {
        perPage: 25,
        startingPage: 0,
        modelPath: 'controller.newsItems'
      })
    });
  },

  setupController(controller, models) {
    controller.setProperties(models);
  }

});

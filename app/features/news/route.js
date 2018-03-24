import Route from '@ember/routing/route';
import RSVP from "rsvp";
import InfinityRoute from "ember-infinity/mixins/route";

export default Route.extend(InfinityRoute, {

  model() {
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
  },

});

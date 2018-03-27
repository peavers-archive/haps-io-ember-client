import Route from '@ember/routing/route';
import RSVP from "rsvp";
import InfinityRoute from "ember-infinity/mixins/route";
import {get} from "@ember/object";

export default Route.extend(InfinityRoute, {

  filter: [],

  model() {
    return RSVP.hash({
      classifications: get(this, 'store').findAll('classification'),

      newsItems: this.infinityModel("newsItem", {
        perPage: 25,
        startingPage: 0,
        modelPath: 'controller.newsItems',
        filter: this.get('filter'),
      })
    });
  },

  setupController(controller, models) {
    controller.setProperties(models);
  },

  actions: {
    filter(classification) {

      let filter = get(this, 'filter');

      if (get(classification, 'state')) {
        filter.push(get(classification, 'id'));
      } else {
        let index = filter.indexOf(get(classification, 'id'));
        if (index > -1) {
          filter.splice(index, 1);
        }
      }
    }
  }

});

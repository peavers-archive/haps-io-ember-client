import Route from '@ember/routing/route';
import RSVP from "rsvp";
import InfinityRoute from "ember-infinity/mixins/route";
import {get} from "@ember/object";
import {inject as service} from '@ember/service';

export default Route.extend(InfinityRoute, {

  session: service(),

  model() {
    if (get(this, 'session.data.authenticated.profile')) {
      return RSVP.hash({
        user: get(this, 'store').queryRecord('user', {email: get(this, 'session.data.authenticated.profile.email')}),
        classifications: get(this, 'store').findAll('classification'),
        newsItems: this.infinityModel("newsItem", {
          perPage: 25,
          startingPage: 0,
          modelPath: 'controller.newsItems',
        }),
      });
    } else {
      return RSVP.hash({
        classifications: get(this, 'store').findAll('classification'),
        newsItems: this.infinityModel("newsItem", {
          perPage: 25,
          startingPage: 0,
          modelPath: 'controller.newsItems',
        }),
      });
    }
  },

  setupController(controller, models) {
    controller.setProperties(models);
  },

});

import Route from '@ember/routing/route';
import RSVP from "rsvp";
import InfinityRoute from "ember-infinity/mixins/route";
import {get, set, computed} from "@ember/object";
import {inject as service} from '@ember/service';

export default Route.extend(InfinityRoute, {

  session: service(),

  model() {
    const userEmail = get(this, 'session.data.authenticated.profile.email');
    const infinity = this.infinityModel("newsItem", {
      perPage: 10,
      startingPage: 0,
      modelPath: 'controller.newsItems',
      userId: userEmail,
      archive: false
    });

    return userEmail ? RSVP.hash({
      user: get(this, 'store').queryRecord('user', {email: userEmail}),
      newsItems: infinity
    }) : RSVP.hash({
      newsItems: infinity
    });
  },

  setupController(controller, models) {
    controller.setProperties(models);
  },


});

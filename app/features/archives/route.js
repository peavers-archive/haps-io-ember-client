import Route from '@ember/routing/route';
import RSVP from "rsvp";
import InfinityRoute from "ember-infinity/mixins/route";
import {get, set, computed} from "@ember/object";
import {inject as service} from '@ember/service';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(InfinityRoute, AuthenticatedRouteMixin, {

  session: service(),

  model() {
    const userEmail = get(this, 'session.data.authenticated.profile.email');
    const infinity = this.infinityModel("newsItem", {
      perPage: 25,
      startingPage: 0,
      modelPath: 'controller.newsItems',
      userId: userEmail,
      archive: true,
    });

    return RSVP.hash({
      user: get(this, 'store').queryRecord('user', {email: userEmail}),
      newsItems: infinity
    });
  },

  setupController(controller, models) {
    controller.setProperties(models);
  },

});

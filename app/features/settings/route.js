import Route from '@ember/routing/route';
import RSVP from "rsvp";
import {get} from "@ember/object";
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Route.extend(AuthenticatedRouteMixin, {

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

import Route from "@ember/routing/route";
import RSVP from "rsvp";
import ApplicationRouteMixin from "ember-simple-auth-auth0/mixins/application-route-mixin";
import { inject as service } from "@ember/service";
import { get } from "@ember/object";

export default Route.extend(ApplicationRouteMixin, {
  currentUser: service(),

  beforeSessionExpired() {
    get(this, "currentUser").deleteLocalUser();

    return RSVP.resolve();
  }
});

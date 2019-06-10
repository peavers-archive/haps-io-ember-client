import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { get, set } from "@ember/object";

export default Component.extend({
  currentUser: service(),

  willRender() {
    this._super(...arguments);

    set(this, "user", get(this, "currentUser").getLocalUser());
  },

  actions: {
    login() {
      this.sendAction("login");
    },

    logout() {
      this.sendAction("logout");
    }
  }
});

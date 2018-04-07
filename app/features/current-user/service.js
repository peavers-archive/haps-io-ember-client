import Service from '@ember/service';
import {get, set} from "@ember/object";
import {inject as service} from '@ember/service';

export default Service.extend({
  store: service(),
  session: service(),

  localUser: null,

  updateLocalUser(user) {
    set(this, 'localUser', user);

    localStorage.setItem('localUser', JSON.stringify(user));
  },

  getLocalUser() {
    let localUser = get(this, 'localUser');

    if (localUser) {
      return localUser;
    }

    try {
      localUser = JSON.parse(localStorage.localUser)
    } catch (e) {

      let authenticatedSession = get(this, 'session.data.authenticated.profile.email');

      if (authenticatedSession) {
        get(this, 'store').queryRecord('user', {email: authenticatedSession}).then((user) => {
          this.updateLocalUser(user);
        });
      }
    }

    set(this, 'localUser', localUser);

    return localUser;
  },

  deleteLocalUser() {
    set(this, 'localUser', null);
    localStorage.removeItem("localUser");
  }

});

import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import { get } from "@ember/object";

export default Controller.extend({
  session: service(),
  currentUser: service(),

  actions: {
    login() {
      const lockOptions = {
        theme: {
          logo:
            "https://haps.io/assets/favicon-4bffc8bcbd4a4850e47bb9de7db7a61a.png",

          primaryColor: "#757ffc"
        },

        languageDictionary: {
          title: "haps.io login"
        },




        autoclose: true,

        closable: true,
        auth: {
          responseType: "token id_token",
          params: {
            scope: "openid profile email user_metadata"
          }
        }
      };
      get(this, "session").authenticate(
        "authenticator:auth0-lock",
        lockOptions
      );
    },

    logout() {
      get(this, "session").invalidate();
    }
  }
});

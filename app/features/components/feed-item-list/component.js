import Component from "@ember/component";
import { get, set } from "@ember/object";

export default Component.extend({
  tagName: "",
  infinityLoadAction: "infinityLoad",

  actions: {
    hideAll() {
      const newsItems = get(this, "newsItems");
      const user = get(this, "user");

      newsItems.forEach(newsItem => {
        user.get("hidden").then(hidden => {
          hidden.pushObject(newsItem);
          user.save();
        });
      });
    },

    readAll() {
      const newsItems = get(this, "newsItems");
      const user = get(this, "user");

      newsItems.forEach(newsItem => {
        user.get("read").then(read => {
          read.pushObject(newsItem);
        });
      });

      user.save();
    },

    infinityLoad(infinityModel) {
      this.sendAction("infinityLoadAction", infinityModel);
    }
  }
});

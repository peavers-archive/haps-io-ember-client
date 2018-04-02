import Component from '@ember/component';
import {computed, get} from '@ember/object';

export default Component.extend({
  tagName: "",
  infinityLoadAction: 'infinityLoad',

  filteredNews: computed('user', function () {
    const newsItems = get(this, 'newsItems');
    const userClassifications = get(this, 'user.classification');

    if(userClassifications == null) {
      return newsItems;
    }

    newsItems.forEach((newsItem) => {
      userClassifications.forEach(userClassification => {
        if (newsItem.get('classification').includes(userClassification)) {
          newsItem.unloadRecord();
        }
      });
    });

    return newsItems;
  }),

  actions: {
    infinityLoad(infinityModel) {
      this.sendAction('infinityLoadAction', infinityModel);
    }
  }
});

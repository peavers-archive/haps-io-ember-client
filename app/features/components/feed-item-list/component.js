import Component from '@ember/component';

export default Component.extend({
  tagName: "",
  infinityLoadAction: 'infinityLoad',

  actions: {
    infinityLoad(infinityModel) {
      this.sendAction('infinityLoadAction', infinityModel);
    }
  }
});

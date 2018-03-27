import Component from '@ember/component';

export default Component.extend({

  actions: {
    filter(item) {
      this.sendAction("filter", item)
    }
  }

});

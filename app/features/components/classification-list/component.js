import Component from '@ember/component';

export default Component.extend({

  tagName: "",

  actions: {
    filter(item) {
      this.sendAction("filter", item)
    }
  }

});

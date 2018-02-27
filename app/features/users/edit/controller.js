import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import {get, set} from '@ember/object';

export default Controller.extend({
  session: service(),
  currentUser: service(),

  actions: {
    toggleActiveType(type) {
      const user = get(this, 'currentUser.user');
      const viewType = get(type, 'type');

      set(this, 'selectedType', type);
      set(user, 'view', viewType);

      user.save();
    },
  }

});

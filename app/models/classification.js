import attr from "ember-data/attr";
import Model from "ember-data/model";
import DS from 'ember-data';

export default Model.extend({
  name: attr('string'),

  // Per user state
  state: attr('boolean')
});

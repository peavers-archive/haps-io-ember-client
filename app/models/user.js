import attr from "ember-data/attr";
import Model from "ember-data/model";
import DS from 'ember-data';

export default Model.extend({
  email: attr('string'),

  classification: DS.hasMany('classification')
});

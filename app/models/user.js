import attr from "ember-data/attr";
import Model from "ember-data/model";
import DS from 'ember-data';

export default Model.extend({
  email: attr('string'),

  read: DS.hasMany('newsItem'),
  hidden: DS.hasMany('newsItem'),

  classification: DS.hasMany('classification'),

  archiveCount: attr('number'),

  toJSON: function() {
    return this._super({ includeId: true });
  }
});

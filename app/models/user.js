import attr from "ember-data/attr";
import Model from "ember-data/model";
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  email: attr('string'),
  sub: attr('string'),

  // Preferences
  view: attr('string'),

  seen: hasMany('news-item')
});

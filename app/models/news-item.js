import attr from "ember-data/attr";
import Model from "ember-data/model";
import { hasMany } from 'ember-data/relationships';


export default Model.extend({
  title: attr('string'),
  description: attr('string'),
  createdAt: attr('date'),
  link: attr('string'),
  image:attr('string'),
  sourceTitle: attr('string'),
  sourceLink: attr('string'),

  seenBy: hasMany('user')
});

import attr from "ember-data/attr";
import Model from "ember-data/model";
import DS from "ember-data";

export default Model.extend({
  title: attr("string"),
  description: attr("string"),
  body: attr("string"),
  createdAt: attr("date"),
  link: attr("string"),
  image: attr("string"),
  sourceTitle: attr("string"),
  sourceLink: attr("string"),

  classification: DS.hasMany("classification")
});

import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "feed-item-list",
  "Integration | Component | feed item list",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{feed-item-list}}`);

  assert.equal(
    this.$()
      .text()
      .trim(),
    ""
  );

  // Template block usage:
  this.render(hbs`
    {{#feed-item-list}}
      template block text
    {{/feed-item-list}}
  `);

  assert.equal(
    this.$()
      .text()
      .trim(),
    "template block text"
  );
});

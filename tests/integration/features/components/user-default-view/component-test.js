import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "user-default-view",
  "Integration | Component | user default view",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{user-default-view}}`);

  assert.equal(
    this.$()
      .text()
      .trim(),
    ""
  );

  // Template block usage:
  this.render(hbs`
    {{#user-default-view}}
      template block text
    {{/user-default-view}}
  `);

  assert.equal(
    this.$()
      .text()
      .trim(),
    "template block text"
  );
});

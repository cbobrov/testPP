import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('list-posts/post-author', 'Integration | Component | list posts/post author', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{list-posts/post-author}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#list-posts/post-author}}
      template block text
    {{/list-posts/post-author}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

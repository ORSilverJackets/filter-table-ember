import { module, test } from 'qunit';
import { setupRenderingTest } from 'filter-table-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | card/image', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Card::Image />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Card::Image>
        template block text
      </Card::Image>
    `);

    assert.dom().hasText('template block text');
  });
});

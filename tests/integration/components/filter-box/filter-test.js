import { module, test } from 'qunit';
import { setupRenderingTest } from 'filter-table-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | filter-box/filter', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<FilterBox::Filter />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <FilterBox::Filter>
        template block text
      </FilterBox::Filter>
    `);

    assert.dom().hasText('template block text');
  });
});

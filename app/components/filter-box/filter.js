import Component from '@glimmer/component';
import { action } from '@ember/object';

function filterTable(selections) {
  if (selections === null) {
    // will match all cards/offices
    selections = [''];
  }
  // get all cards
  var cards = document.getElementsByClassName('card');
  // loop though cards
  for (var i = 0; i < cards.length; i++) {
    // get all offices for this card
    var offices = cards[i].getElementsByClassName('office');
    var office_count = 0;
    // loop through offices
    for (var k = 0; k < offices.length; k++) {
      var office_flag = true;
      // loop through selected tags
      for (var j = 0; j < selections.length; j++) {
        if (!offices[k].dataset.tags.includes(selections[j])) {
          office_flag = false;
          // office doesn't have this tag, don't need to check other tags
          break;
        }
      }
      if (office_flag) {
        // at least one tag, so display office
        offices[k].style.display = '';
        office_count += 1;
      } else {
        // no tags, so hide office
        offices[k].style.display = 'none';
      }
    }
    if (office_count > 0) {
      // at least one office, so display card
      cards[i].style.display = '';
    } else {
      // no offices, so hide card
      cards[i].style.display = 'none';
    }
  }
  true;
}


export default class FilterBoxFilterComponent extends Component {

  @action
  applyFilters() {
    let checkboxes = document.querySelectorAll("input[type=checkbox][name='options[]']");
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
          // Convert checkboxes to an object array, remove unchecked, extract values
          filterTable(
            Array.from(checkboxes)
              .filter((i) => i.checked)
              .map((i) => i.value),
          );
        });
      });
  }
}

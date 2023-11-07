import Route from '@ember/routing/route';

//import jQuery from 'jquery';
import Papa from 'papaparse';

export default class IndexRoute extends Route {
  async model() {
    // read input files
    const [agencies_response, offices_response] = await Promise.all([
      fetch(
        'https://raw.githubusercontent.com/ORSilverJackets/filter-table-ember/master/public/api/agencies.csv',
      ),
      fetch(
        'https://raw.githubusercontent.com/ORSilverJackets/filter-table-ember/master/public/api/program_selection_guide.csv',
      ),
    ]);
    const [agencies_text, offices_text] = await Promise.all([
      agencies_response.text(),
      offices_response.text(),
    ]);
    // parse csv data
    const agencies_data = Papa.parse(agencies_text, { header: true }).data;
    const offices_data = Papa.parse(offices_text, { header: true }).data;
    // tags are all fields after agency, office, id
    const all_tags = Object.keys(offices_data).slice(3);

    // build list of agencies (cards)
    let agencies = agencies_data.reduce(function (r, a) {
      // separate agency field from rest of attributes
      const { agency, ...rest } = a;
      // use agency as JSON element names
      r[agency] = rest || [];
      //r[agency].push(rest);
      return r;
    }, Object.create(null));

    // build list of offices
    const offices = offices_data.reduce(function (r, a) {
      // separate identifier fields from tag fields
      const { agency, office, id, ...rest } = a;
      // get column headers that do not have an empty entry
      const marked_tags = Object.fromEntries(
        Object.entries(rest).filter(([_, v]) => v.trim() != ''),
      );
      // create tag string
      const tag_list = Object.keys(marked_tags);
      const tags = tag_list.join(',');
      r[agency] = r[agency] || [];
      r[agency]['offices'] = r[agency]['offices'] || [];
      r[agency]['offices'].push({ office, id, tags });
      r[agency]['taglist'] = r[agency]['taglist'] || [];
      r[agency]['taglist'].push(...tag_list);
      return r;
    }, Object.create(null));

    // add offices to agencies
    for (const key of Object.keys(agencies)) {
      let agency_tag_list = [];
      if (Object.keys(offices).includes(key)) {
        agencies[key]['offices'] = offices[key]['offices'] || [];
        // concatenate tags
        agency_tag_list.push(...offices[key]['taglist']);
      } else {
        agencies[key]['offices'] = [];
      }
      agencies[key]['tags'] = [...new Set(agency_tag_list)]
        .join(',');
    }
    // return array, not named elements
    return Object.values(agencies);
  }
}

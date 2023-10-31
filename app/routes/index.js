import Route from '@ember/routing/route';

//import jQuery from 'jquery';
//import Papa from 'papaparse'

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('/api/test.json');
    let { data } = await response.json();
    
    //let response2 = await fetch('/api/program_selection_guide.csv');
    //let parsed2 = await response2.text();
    //let v = Papa.parse(parsed2)

    return data;
    //data.map((model) => {
    //  let { attributes } = model;
    //  // loop through offices and add to top level tags
    //  //let type;
    //  //if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
    //  //  type = 'Community';
    //  //} else {
    //  //  type = 'Standalone';
    //  //}
    //  //return { type, ...attributes };
    //  return { ...attributes };
    //});
  }
}

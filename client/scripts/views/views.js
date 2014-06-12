/*
{
  "authors": [
    {
      "name": {
        "first": "Dylson",
        "last": "Valente Neto",
        "alias": ["n370", "n370n370"]
      },  
      "email": ["dvalenteneto@santafe.gov.ar"]
    } 
  ],
  "contributors": [    
    {
      "name": {
        "first": "Dylson",
        "last": "Valente Neto",
        "alias": ["n370", "n370n370"]
      },  
      "email": ["dvalenteneto@santafe.gov.ar"]
    } 
  ] 
}
*/

var dependencies = ['views/structure','views/search','views/map-view','views/info-view'];

function Module(structure,search,maps,info) {

  return { 
    Views: function() {
      var Structure = new structure.Structure();
      var Search = new search.Search();
      var Maps = new maps.mapView();

      console.log(Maps.layers);
    }
  }
}

define(dependencies, Module);
import { stateOptions } from '../data/citiesData';

function filterCities(city) {
   return stateOptions.filter(state => state.label.toLowerCase().includes(city.toLowerCase()));
}

export function getCitiesData(city) {
   return new Promise(resolve => {
      setTimeout(() => {
         resolve(filterCities(city));
      }, 1000);
   });
}

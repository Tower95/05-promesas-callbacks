'use strict';
import './styles.css';
import { searchHero } from './js/promises.js';

const heroid1 = 'cap';
const heroid2 = 'ironMan';
const heroid3 = 'thor';


// DO NOT DO
// searchHero(heroid1)
//   .then((hero) => {
//      searchHero(heroid2).then((hero2) => {
//       console.log(`sending ${hero.name} and ${hero2.name} to mission`); 
//      })
//   })

// DO
// Return the result of multiples promise in order assign in array.
Promise.all([searchHero(heroid1), searchHero(heroid2)])
  .then(([hero1,hero2]) =>{
    console.log(`sending ${hero1.name} and ${hero2.name} to mission`); 
  })
  .catch(err =>{
    console.error(err);
  })
  .finally(() =>{
    console.log('end of promis all');
  })

console.log('end');


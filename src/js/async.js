'use strict';
import './styles.css';
import { searchHero, searchHeroAsync } from './js/promises.js';

searchHero('cap2')
  .then(console.log)
  .catch(console.warn);

searchHeroAsync('ironMan2')
  .then(console.log)
  .catch(console.warn);


// promiseSlow.then(console.log);
// promiseMedium.then(console.log);
// promiseFast.then(console.log);

// Promise.race([promiseFast,promiseMedium,promiseSlow])
//   .then(console.log)
//   .catch(console.error);






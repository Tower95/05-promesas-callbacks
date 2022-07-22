'use strict';
import './styles.css';
import {promiseSlow, promiseMedium, promiseFast} from './js/promises.js';




// promiseSlow.then(console.log);
// promiseMedium.then(console.log);
// promiseFast.then(console.log);

Promise.race([promiseFast,promiseMedium,promiseSlow])
  .then(console.log)
  .catch(console.error);

 



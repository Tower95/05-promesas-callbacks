'use strict';
import './styles.css';
import { getHerosArr , getHeroAwait } from './js/await.js';
console.time('await')
getHeroAwait('cap2').then(hero => {
  
  console.log(hero)
  console.timeEnd('await');

}).catch(console.warn)
 



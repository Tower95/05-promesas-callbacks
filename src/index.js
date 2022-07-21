'use strict';
import './styles.css';
import { searchHero } from './js/callbacks.js';

const heroid1 = 'cap';
const heroid2 = 'ironMan';
const heroid3 = 'thor';

searchHero(heroid1, (err, hero) => {

  if (err) { return console.error(err); }

  searchHero(heroid2, (err, hero2) => {

    if (err) { return console.error(err); }

    searchHero(heroid3, (err, hero3) => {

      if (err) { return console.error(err); }

      console.log(`sending ${hero.name}, ${hero3.name} and ${hero2.name} to mission`);

    });
  });
});

console.log('end');


'use strict'


const heros = {
  cap: {
    name: "Captain America",
    power: "Super Streng"
  },
  ironMan: {
    name: "Iron Man",
    power: "A lot of money"
  },
  thor: {
    name: "Thor god of Thunder",
    power: "Hammer goes piuw piuw"
  },
  undefined:false
}

export const searchHero = (id, callback) => {
  const hero = heros[id];
    
  if( hero ){
    callback( null, hero);
  }else {
    callback(`doesn't exist a hero with the id: ${id}`);
  }
  
}

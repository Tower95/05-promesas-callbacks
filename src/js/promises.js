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

export const searchHero = (id) =>{
  
  const hero = heros[id];

  return new Promise( (resolve, reject)=>{

    if(hero){

       setTimeout(() => resolve(hero), 1000)
     
    }else{

      reject(`doesn't exist a hero with the id: ${id}`);

    } 

  });
}

export const searchHeroAsync = async (id) =>{
  
  const hero = await heros[id];

  if(hero){
    return hero;
  }else{
      throw Error(`There is not a hero with id: ${id}`);
  }
}

const promiseSlow = new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('Promise Slow'); 
    }, 2000);
})

const promiseMedium = new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('Promise Medium'); 
    }, 1000);
})

const promiseFast = new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('Promise Fast'); 
    }, 500);
})

export {
  promiseSlow,
  promiseMedium,
  promiseFast
}

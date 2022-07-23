import { searchHero, searchHeroAsync } from "./promises";

const herosIds = ['cap', 'ironMan', 'thor'];
const herosPromises = herosIds.map(searchHero);

export const getHerosArr = async () => {

  // const herosArr = [];

  // // Never use the await inside of a cycle
  // // insted process all promise with Promise.all
  // // at the same time!  
  // for (const id of herosIds) {
  //   herosArr.push( searchHero(id));
  // }

  // return await Promise.all(herosArr);

  // Or even better
  return await Promise.all(herosIds.map(searchHero));
}

export const getHeroAwait = async (id) => {

  try {

    const hero = await searchHeroAsync(id);

    return hero;

  } catch (err) {

    console.log('CATCH!!!')

    return {
      name: "no name",
      power: "no power"
    }

  }
}

export const herosCyclic = async () =>{
  console.time('HeroCyclic');

  for await(const hero of herosPromises){
    console.log(hero)
  }
  
  console.timeEnd('HeroCyclic');
  // const heros = await Promise.all(herosPromises);
  // heros.forEach(hero => console.log(hero));
}

export const heroIfAwait = async () => {
  if((await getHeroAwait('ironMan')).name === 'Iron Man'){
    console.log("Is the best!!");
  }else{
    console.log('Naaa');
  }
}



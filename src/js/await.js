import { searchHero, searchHeroAsync } from "./promises";

const herosIds = ['cap', 'ironMan', 'thor'];

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

export const getHeroAwait = async (id) =>{

  try{

    const hero = await searchHeroAsync(id);
  
    return hero;
    
  }catch(err){

    console.log('CATCH!!!')

    return {
       name: "no name",
       power: "no power"
    }

  }
}




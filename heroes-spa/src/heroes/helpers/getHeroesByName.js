import { heroes } from '../data/heroes';

export const getHeroesByName = ( name = '' ) => {
    name = name.toLocaleLowerCase().trim();
    
    if ( name.length === 0 ) return [];

    let result = heroes.filter(        
        hero => hero.superhero.toLocaleLowerCase().includes( name ) 
    );    
    return result;
}
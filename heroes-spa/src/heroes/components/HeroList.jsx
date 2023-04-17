import { useMemo } from 'react';
import { HeroCard } from './';
import { getHeroesByPublisher } from '../helpers';

export const HeroList = ({publisher}) => {
   
    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ]);
    const HeroCardItem = HeroCard();

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map( hero => ( 
                        <HeroCardItem key={hero.id} {...hero}
                        />
                 ))
            }            
        </div>
    );
}
import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
    // const heroes = getHeroesByPublisher(publisher);
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <>
            <div className='card-columns animate__animated animate__fadeIn'>
                {heroes && heroes.map((item) => <HeroCard key={item.id} {...item} />)}
            </div>
        </>
    );
};

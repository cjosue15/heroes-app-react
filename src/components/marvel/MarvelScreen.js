import React from 'react';
import { HeroList } from '../heroes/HeroList';

export const MarvelScreen = () => {
    return (
        <>
            <h1>Marvel Comics</h1>
            <HeroList publisher={'Marvel Comics'} />
        </>
    );
};

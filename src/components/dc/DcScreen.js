import React from 'react';
import { HeroList } from '../heroes/HeroList';

export const DcScreen = () => {
    return (
        <>
            <h1>DC Comics</h1>
            <HeroList publisher={'DC Comics'} />
        </>
    );
};

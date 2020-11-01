import React, { useMemo } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroeScreen = () => {
    const { heroeId } = useParams();
    const history = useHistory();

    // const hero = getHeroById(heroeId);
    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

    if (!hero) {
        return <Redirect to='/' />;
    }

    const handleReturn = () => {
        const serie = heroeId.split('-')[0];

        if (history.length <= 2) {
            history.push(`/${serie}`);
        } else {
            history.goBack();
        }
    };

    const { superhero, publisher, alterEgo, firstAppearance, characters } = hero;

    return (
        <div className='row'>
            <div className='col-4'>
                {/* <img src={`../assets/heroes/${heroeId}.jpg`} className='img-thumbnail' alt={superhero} /> */}
                <img
                    src={`${process.env.PUBLIC_URL}/assets/heroes/${heroeId}.jpg`}
                    className='img-thumbnail animate__animated animate__fadeInDown'
                    alt={superhero}
                />
            </div>
            <div className='col-8'>
                <h3>{superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Alter ego:</b> {alterEgo}
                    </li>
                    <li className='list-group-item'>
                        <b>Publisher:</b> {publisher}
                    </li>
                    <li className='list-group-item'>
                        <b>First Appearance:</b> {firstAppearance}
                    </li>
                    <li className='list-group-item'>
                        <b>Alter ego:</b> {alterEgo}
                    </li>
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>
                <button onClick={handleReturn} className='btn btn-outline-info'>
                    Return
                </button>
            </div>
        </div>
    );
};

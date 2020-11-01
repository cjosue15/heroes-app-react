import React from 'react';
import { Link } from 'react-router-dom';
import './HeroCard.css';

export const HeroCard = ({ id, superhero, alterEgo, firstAppearance, characters, type }) => {
    return (
        <div className='card ms-3' style={type === 2 ? { marginBottom: 50 } : { maxWidth: 540 }}>
            <div className='row no-gutters'>
                <div className={`${type === 2 ? 'col-md-4' : 'col-md-12'}`}>
                    <img src={`./assets/heroes/${id}.jpg`} className='card-img' alt={superhero} />
                </div>
                <div className='col-md-8'>
                    <div className={`card-body ${type === 2 && 'center-div'}`}>
                        <h5 className='card-title'>{superhero}</h5>
                        <p className='card-text'>{alterEgo}</p>
                        {alterEgo !== characters && <p className='card-text'>{characters}</p>}
                        <p className='card-text'>
                            <small className='text-muted'>{firstAppearance}</small>
                        </p>
                        <Link to={`/hero/${id}`}>Más</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

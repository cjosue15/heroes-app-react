import React, { useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import queryString from 'query-string';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = () => {
    const history = useHistory();
    const location = useLocation().search;
    const { q = '' } = queryString.parse(location);
    const [values, handleInputChange] = useForm({ searchText: q });
    const { searchText } = values;
    // const heroesFiltered = getHeroesByName(searchText);

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    };

    return (
        <div>
            <div className='row'>
                <div className='col-4'>
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <input
                                type='text'
                                name='searchText'
                                value={searchText}
                                onChange={handleInputChange}
                                placeholder='Find Your Hero'
                                className='form-control'
                                autoComplete='off'
                            />
                        </div>
                        <button type='submit' className='btn btn-info d-block w-100'>
                            Search
                        </button>
                    </form>
                </div>
                <div className='col-8'>
                    <h4>Results</h4>
                    <hr />
                    {heroesFiltered.length === 0 ? (
                        <div className='alert alert-warning'>No data Found</div>
                    ) : (
                        heroesFiltered.map((hero) => <HeroCard key={hero.id} {...hero} type={2} />)
                    )}
                </div>
            </div>
        </div>
    );
};

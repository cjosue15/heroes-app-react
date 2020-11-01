import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = () => {
    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        const actionAuth = {
            type: types.login,
            payload: {
                name: 'Carlos',
            },
        };

        dispatch(actionAuth);
    };
    return (
        <div className='container mt-5'>
            <h1>Login Screen</h1>
            <hr />
            <button className='btn btn-info' onClick={handleLogin}>
                Ingresar
            </button>
        </div>
    );
};

import React, { useContext, useState } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import './LoginScreen.css';

export const LoginScreen = () => {
    const [values, setValue] = useState({ input: '', error: false });
    const { input, error } = values;
    const { dispatch } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        if (input.trim().length > 0) {
            setValue({
                ...values,
                error: false,
            });

            const actionAuth = {
                type: types.login,
                payload: {
                    name: input,
                },
            };

            dispatch(actionAuth);
        } else {
            setValue({
                ...values,
                error: true,
            });
        }
    };

    const handleInput = ({ target: { value } }) => {
        setValue({
            ...values,
            input: value,
        });
    };

    return (
        <div id='login'>
            <div className='login-container'>
                <h1>Login</h1>
                <hr />
                <form onSubmit={handleLogin}>
                    <div className='form-group'>
                        <label>Ingresa Tu Nombre</label>
                        <input type='text' className='form-control' value={input} onChange={handleInput} />
                        {error && <span className='text-danger d-block mt-2'>Debes ingresar tu nombre.</span>}
                    </div>
                    <button className='btn btn-info'>Ingresar</button>
                </form>
            </div>
        </div>
    );
};

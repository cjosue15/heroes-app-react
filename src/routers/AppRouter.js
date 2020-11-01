import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';

export default function AppRouter() {
    const {
        user: { logged },
    } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch>
                    {/* <Route exact path='/login' component={LoginScreen} /> */}
                    <PublicRoute exact path='/login' isLogged={logged} component={LoginScreen} />
                    {/* <Route path='/' component={DashboardRoutes} /> */}
                    <PrivateRoute isLogged={logged} path='/' component={DashboardRoutes} />
                    {/* {logged ? (
                        <Route path='/' component={DashboardRoutes} />
                    ) : (
                        <>
                            <Route exact path='/login' component={LoginScreen} />
                            <Redirect to='/login' />
                        </>
                    )} */}
                </Switch>
            </div>
        </Router>
    );
}

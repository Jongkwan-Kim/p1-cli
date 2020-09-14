import React from 'react';
import './App.css';
import APIIntercepter from '../components/APIInterceptor';
import { history } from '../utils';
import CONSTANT from '../constant';
import MainPage from './MainPage';
import LoginPage from './LogInPage';
import RegisterPage from './RegisterPage';
import P1 from './p1'

import {
    Router,
    Switch,
    Route,
    Redirect

} from "react-router-dom";

function App() {
    return (
        <React.Fragment>
            <APIIntercepter />
            <Router history={history}>
                <Switch>
                    <Route exact path={'/'} component={MainPage} />
                    <Route exact path={`${CONSTANT.URL.LOG_IN}`} component={LoginPage} />
                    <Route exact path={`${CONSTANT.URL.REGISTER}`} component={RegisterPage} />
                    <Route path={`${CONSTANT.URL.P1}/*`} component={P1} />
                    <Route path="*" render={() => (<Redirect to={'/'} />)} />
                </Switch>
            </Router>
        </React.Fragment>
    );
}

export default App;

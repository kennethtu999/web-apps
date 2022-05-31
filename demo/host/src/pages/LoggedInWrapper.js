import React, {memo} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import App from './App';
import Index from './Index';
import {MenuApp} from './MenuApp';

import {FederationApp} from './FederationApp';
import {FederationDirectApp} from './FederationDirectApp';

const logout = () => alert('Logout');

const Layout = ({match}) => (
    <>
        <div className="header">
            <Link to="/" className="logo" />
            <h3 className="font-weight-lighter text-primary">IBMB HostAPP</h3>
        </div>

        <MenuApp logout={logout} />

        <Switch>
            <Route path={`${match.url}`} component={Index} exact />
            <Route path={`${match.url}/:appId`} component={App} />
        </Switch>

        <FederationApp />
        <FederationDirectApp />
    </>
);

export default memo(Layout);

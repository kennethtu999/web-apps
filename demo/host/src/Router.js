import React from 'react';
import {createBrowserHistory} from 'history';
import {Route, Switch, Redirect, Router} from 'react-router-dom';
import {LocationSync} from '@ringcentral/web-apps-host-react';

import LoggedInWrapper from './pages/LoggedInWrapper';
import GuestWrapper from './pages/GuestWrapper';
import NotFound from './pages/NotFound';

// This allows to block history in sub-apps, this is not required in general
window.RCAppsDemoHistory = createBrowserHistory();

export default () => (
    <Router history={window.RCAppsDemoHistory}>
        <LocationSync />
        <Switch>
            <Route path="/application/gapps" component={GuestWrapper} />
            <Route path="/application/apps" component={LoggedInWrapper} />
            <Redirect from="/" to="/application/gapps/fco08001" />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

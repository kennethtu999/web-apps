import React, {memo} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import App from './App';
import Index from './Index';

const Layout = ({match}) => (
    <>
        <div className="header">
            <h3 className="font-weight-lighter text-primary">登入頁</h3>
        </div>

        <Switch>
            <Route path={`${match.url}`} component={Index} exact />
            <Route path={`${match.url}/:appId`} component={App} />
        </Switch>
    </>
);

export default memo(Layout);

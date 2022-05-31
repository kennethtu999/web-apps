import React from 'react';
import {NavLink} from 'react-router-dom';
import {dispatchEvent, eventType} from '@ringcentral/web-apps-react';

export default ({node}) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav" style={{flex: 1}}>
            <li className="nav-item active">
                <NavLink to="/application/apps" className="nav-link" exact>
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/application/apps/global" className="nav-link">
                    Global
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/application/apps/vue" className="nav-link">
                    Vue
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/application/apps/iframe" className="nav-link">
                    IFrame
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/application/apps/admin" className="nav-link">
                    Admin
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/application/apps/angular" className="nav-link">
                    Angular
                </NavLink>
            </li>
        </ul>
        <small className="navbar-text" style={{marginRight: '1rem'}}>
            menu app that listens to routing
        </small>
        <NavLink to="/" className="nav-link">
            登出
        </NavLink>
    </nav>
);

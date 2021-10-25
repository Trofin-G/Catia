import './Header.scss';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import { headerItems } from './HeaderItems';

const Header = () => {
    
    const Routes = () => {
        return headerItems.map((route, index) => {
            const { path, exact } = route;
            return(
                <Route key={index}
                    path={path}
                    exact={exact}
                    render={ () => { return route.component; }}
                />
            )
        })
    }

    const [isActive, setActive] = useState('true');

    const handleToggle = () => {
        setActive(!isActive);
    }

    return(
        <React.Fragment>
            <nav className="NavbarItems">
                <div className="navbar-logo"><i className="fas fa-virus"></i> Covid 19 Tracker </div>
                <div className="menu-icon" onClick={handleToggle}>
                    <i className={isActive ? 'fas fa-bars' : 'fas fa-times'} ></i>
                </div>
                <ul className={isActive ? "nav-menu" : "nav-menu active"}>
                    <li> <NavLink activeClassName="nav-link-active" className="nav-links" to='/symptoms'>Symptoms</NavLink> </li>
                    <li> <NavLink activeClassName="nav-link-active" className="nav-links" to='/personalinfo'>Personal Information</NavLink> </li>
                    <li> <NavLink activeClassName="nav-link-active" className="nav-links" to='/statistics'>Statistics</NavLink> </li>
                </ul>
            </nav>
            <Switch >
                <div className="banner">
                    <div className="banner-info">
                        <p className="banner-text"><Routes/></p>
                    </div>
                </div>
            </Switch>
        </React.Fragment>
    )
}

export default Header;
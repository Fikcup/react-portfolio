import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Nav = () => {
    return (
        <nav>
            <ul>
                <NavLink exact to='/' activeClassName='main-nav-active'>
                    <li>Portfolio</li>
                </NavLink>
                <NavLink to='/about' activeClassName='main-nav-active'>
                    <li>About Me</li>
                </NavLink>
                <NavLink to='/resume' activeClassName='main-nav-active'>
                    <li>Resume</li>
                </NavLink>
                <NavLink to='/contact' activeClassName='main-nav-active'>
                    <li>Contact me</li>
                </NavLink>
            </ul>
        </nav>
    );
}

export default Nav;
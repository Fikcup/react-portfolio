import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Nav = () => {
    return (
        <nav>
            <ul>
                <Link to='/'>
                    <li>About Me</li>
                </Link>
                <Link to='/portfolio'>
                    <li>Portfolio</li>
                </Link>
                <Link to='/resume'>
                    <li>Resume</li>
                </Link>
                <Link to='/contact'>
                    <li>Contact me</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
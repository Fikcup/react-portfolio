import React from 'react';
import './style.scss';

const Header = (props) => {
    return (
        <header>
            <h1>Rhys Wright</h1>
            {props.children}
            <img src="../assets/header-img.jpg" alt="brick wall banner" />
        </header>
    );
}

export default Header;
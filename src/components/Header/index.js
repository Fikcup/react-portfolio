import React from 'react';
import './style.scss';

const Header = () => {
    return (
        <header>
            <h1><span className="code">&lt;</span> Rhys Wright <span class="code">/&gt;</span></h1>
            <div id="img-container">
                <img src="../assets/header-img.jpg" alt="brick wall banner" id="header-img" />
            </div>
        </header>
    );
}

export default Header;
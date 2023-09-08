import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <p id="codeLink">
                <a target=" _blank" 
                rel="noreferrer" 
                className="footerLink"
                id="portfolioCode" 
                href="https://github.com/Fikcup/react-portfolio">
                    Portfolio
                </a> by <a target="_blank" 
                rel="noreferrer"
                className="footerLink"
                id="portfolioCreator"
                href="https://github.com/Fikcup">
                    Rhys Wright
                </a>
            </p>

            <p id="clientContact"> 
                Reach me at <a className="footerLink"
                href="mailto:rhys.n.wright@gmail.com?subject=Mail from Portfolio">
                    rhys.n.wright@gmail.com
                </a> or {" "}
                <a target="_blank" 
                rel="noreferrer"
                className="footerLink"
                id="portfolioCreator"
                href="https://www.linkedin.com/in/rhys-wright/">
                    through LinkedIn
                </a>
            </p>
        </footer>
    );
}

export default Footer;
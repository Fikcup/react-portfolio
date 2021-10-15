import React from "react";
import './style.scss';

const Icon = (props) => {

    return (
        <li className="contactList">
            <a target="_blank" rel="noreferrer" href={props.link}>
                <span className="reactIcon">{props.children}</span>
                <span className="iconText">{props.text}</span>
            </a>
        </li>
    );
}

export default Icon;
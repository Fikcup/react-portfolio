import React from 'react';
import './style.scss';

// Reusable project component that accepts props

const Project = (props) => {
    return (
        <div>
            <a target="_blank" rel="noreferrer" href={props.deployment}>
                <img src={props.src} alt={props.name} />
                <h2>{props.name}</h2>
            </a>
            <h3>
                <a target="_blank" rel="noreferrer" href={props.github}>
                    Code here
                </a>
            </h3>
            <p>{props.desc}</p>
        </div>
    );
}

export default Project;
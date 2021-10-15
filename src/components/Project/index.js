import React from 'react';
import './style.scss';

// Reusable project component that accepts props

const Project = (props) => {
    return (
        <article className="project">
            <a target="_blank" rel="noreferrer" href={props.deployment}>
                <img src={props.src} alt={props.name} />
                <h3>{props.name}</h3>
            </a>
            <h4>
                <a target="_blank" rel="noreferrer" href={props.github}>
                    Code here
                </a>
            </h4>
            <p className="projectDesc">{props.desc}</p>
            <p className="projectTech">{props.tech}</p>
        </article>
    );
}

export default Project;
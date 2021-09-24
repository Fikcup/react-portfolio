import React from 'react';

// TODO: Create JSON file that implements these props

const Project = (props) => {
    render (
        <div>
            <a target="_blank" href={props.deployment}>
                <img src={props.src} alt={props.name} />
                <h2>{props.name}</h2>
            </a>
            <h3>
                <a target="_blank" href={props.github}>
                    Code here
                </a>
            </h3>
        </div>
    );
}

export default Project;
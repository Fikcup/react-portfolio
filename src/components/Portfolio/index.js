import React from 'react';
import { render } from 'react-dom';
import Project from '../Project';
import projects from './projects.json';


// TODO: Create JSON file with props and map to create a list of projects

const Portfolio = () => {
    return (
        <section>
            {projects.map((projects) => (
                <Project 
                    name = {projects.name}
                    src = {projects.src}
                    deployment = {projects.deployment}
                    github = {projects.github}
                    desc = {projects.desc}
                />
            ))}
        </section>
    );
}

export default Portfolio;
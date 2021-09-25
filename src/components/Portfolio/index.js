import React from 'react';
import Project from '../Project';
import projects from './projects.json';


// Maps JSON file and inputs content as props to output a portfolio

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
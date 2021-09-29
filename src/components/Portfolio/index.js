import React from 'react';
import Project from '../Project';
import projects from './projects.json';
import './style.scss';


// Maps JSON file and inputs content as props to output a portfolio

const Portfolio = () => {
    return (
        <section id="portfolio" className="projectContainer">
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
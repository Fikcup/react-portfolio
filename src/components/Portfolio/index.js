import React from 'react';
import './style.scss';
import Project from '../Project';
import projects from './projects.json';


// Maps JSON file and inputs content as props to output a portfolio

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h2 className="sectionTitle">Portfolio</h2>

            <article className="projectContainer">
                {projects.map((projects) => (
                    <Project 
                        id = {projects.id}
                        name = {projects.name}
                        src = {projects.src}
                        deployment = {projects.deployment}
                        github = {projects.github}
                        desc = {projects.desc}
                        tech = {projects.tech}
                        key = {projects.name}
                    />
                ))}
            </article>
        </section>
    );
}

export default Portfolio;
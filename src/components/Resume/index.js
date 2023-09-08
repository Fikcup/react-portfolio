import React from 'react';
import './style.scss';
import { MdFileDownload } from 'react-icons/md';

const Resume = () => {
    return (
        <section id="resume">
            <h2 className="sectionTitle">Resume</h2>

            <article className="downloadResume">
                <a href="https://fikcup.github.io/react-portfolio/assets/Resume.pdf" download target="_blank" rel="noreferrer" id="download">
                    <span id="downloadIcon"><MdFileDownload size={40}/></span>
                    Download Resume as a PDF
                </a>
            </article>

            <article id="languagesContainer">
                <div className="languageList">
                    <h3 className="languageSection">Languages</h3>
                    <ul>
                        <li>TypeScript</li>
                        <li>JavaScript</li>
                        <li>PHP</li>
                        <li>C#</li>
                    </ul>
                </div>

                <div className="languageList">
                    <h3 className="languageSection">Front-End</h3>
                    <ul>
                        <li>React</li>
                        <li>CSS/SCSS</li>
                        <li>MaterialUI</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>

                <div className="languageList">
                    <h3 className="languageSection">Back-End</h3>
                    <ul>
                        <li>GraphQL</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Docker</li>
                        <li>Kubernetes</li>
                    </ul>
                </div>

                <div className="languageList">
                    <h3 className="languageSection">Databases</h3>
                    <ul>
                        <li>MySQL</li>
                        <li>PostgresQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>

                <div className="languageList">
                    <h3 className="languageSection">Software</h3>
                    <ul>
                        <li>AWS</li>
                        <li>Jira</li>
                        <li>Unity</li>
                        <li>Figma</li>
                    </ul>
                </div>
            </article>
        </section>
    )
}

export default Resume;
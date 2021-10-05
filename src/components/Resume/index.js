import React from 'react';
import './style.scss';
import { MdFileDownload } from 'react-icons/md';

const Resume = () => {
    return (
        <section id="resume">
            <h2 className="sectionTitle">Resume</h2>

            <article className="downloadResume">
                <a href="../assets/Resume.pdf" download target="_blank" rel="noreferrer" id="download">
                    <span id="downloadIcon"><MdFileDownload size={40}/></span>
                    Download Resume as a PDF
                </a>
            </article>

            <article id="languagesContainer">
                <div className="languageList">
                    <h3 className="languageSection">Languages</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>C#</li>
                        <li>Java</li>
                        <li>Python</li>
                    </ul>
                </div>

                <div className="languageList">
                    <h3 className="languageSection">Front-End</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SASS</li>
                        <li>Tailwind</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                        <li>Redux</li>
                    </ul>
                </div>

                <div className="languageList">
                    <h3 className="languageSection">Back-End</h3>
                    <ul>
                        <li>Express.js</li>
                        <li>Node.js</li>
                        <li>JSON</li>
                        <li>REST</li>
                        <li>GraphQL</li>
                    </ul>
                </div>

                <div className="languageList">
                    <h3 className="languageSection">Databases</h3>
                    <ul>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>MariaDB</li>
                    </ul>
                </div>

                <div className="languageList">
                    <h3 className="languageSection">Software</h3>
                    <ul>
                        <li>Unity</li>
                        <li>Insomnia</li>
                        <li>Figma</li>
                    </ul>
                </div>
            </article>
        </section>
    )
}

export default Resume;
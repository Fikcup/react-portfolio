import React from 'react';

const Resume = () => {
    return (
        <section>
            <a href="../public/assets/Resume.pdf" download>Resume</a>

            <h2>Front-End Languages</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
                <li>Tailwind</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
            </ul>

            <h2>Back-End Languages</h2>
            <ul>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>SQL</li>
                <li>Mongoose</li>
            </ul>

            <h2>APIs</h2>
            <ul>
                <li>REST</li>
                <li>GQL</li>
                <li>Apollo Server</li>
                <li>Stripe</li>
            </ul>
        </section>
    )
}

export default Resume;
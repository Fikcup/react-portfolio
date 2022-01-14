import React from 'react';
import './style.scss';

const About = () => {
    return (
        <section id="about">
            <h2 className="sectionTitle">About Me</h2>

            <img src="https://fikcup.github.io/react-portfolio/assets/profile-picture.jpg" alt="Rhys Wright" id="profileImg"/>

            <p>Rhys Wright is a software developer focused on improving and gaining additional experience in the tech industry. They primarily develop backend and fullstack web applications using a variety of programming languages, frameworks, and libraries.<br /><br />
            
            Rhys is a self taught developer who has previously worked as a backend developer for a startup. They are currently seeking backend and fullstack job opportunities.</p>
        </section>
    );
}

export default About;
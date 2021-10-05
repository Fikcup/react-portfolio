import React from 'react';
import './style.scss';

const About = () => {
    return (
        <section id="about">
            <h2 className="sectionTitle">About Me</h2>

            <img src="https://fikcup.github.io/react-portfolio/assets/profile-picture.jpg" alt="Rhys Wright" id="profileImg"/>

            <p>Rhys Wright is a software developer focused on improving and gaining additional experience in the tech industry. They primarily develop fullstack web applications using a variety of languages and APIs.<br /><br />
            
            Rhys is a self taught developer who currently works as a full stack web development tutor and centralized grader for 2U. They also work as a Teaching Assistant for 2U cohorts across a variety of colleges and universities.<br /><br />
            
            They are currently seeking opportunities to gain additional experience working with the full software development life cycle and a development team.</p>
        </section>
    );
}

export default About;
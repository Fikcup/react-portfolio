import React from 'react';
import './style.scss';

const About = () => {
    return (
        <section id="about">
            <h2 className="sectionTitle">About Me</h2>

            <img src="https://fikcup.github.io/react-portfolio/assets/profile-picture.jpg" alt="Rhys Wright" id="profileImg"/>

            <p>I'm a mid-level Full Stack Software Engineer with a strong emphasis on backend development. My expertise revolves around TypeScript and AWS, particularly in building cloud-based microservices. I'm passionate about designing and developing scalable, distributed systems that can handle complex tasks with ease. My proficiency in TypeScript allows me to write clean and maintainable code, while my experience with AWS services helps me leverage the power of the cloud for efficient and reliable solutions. I thrive in collaborative environments, and I'm committed to delivering high-quality software that meets business goals and user needs.</p>
        </section>
    );
}

export default About;
import React from 'react';
import './style.scss';
import Icon from '../Icon';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';

export const Contact = () => {
    return (
        <section id="contact">
            <h2 className="sectionTitle">Let's Work Together</h2>
            <article className="emailForm contactContainer" id="contactInfo">
                <ul className="contactList">
                    <Icon link="https://github.com/fikcup"
                    text="github.com/fikcup"
                    ><AiOutlineGithub size={40} /></Icon>
                    <Icon link="https://www.linkedin.com/in/rhys-wright/"
                    text="linkedin.com/rhys-wright"
                    ><FaLinkedinIn size={40} /></Icon>
                    <Icon link="mailto:rhys.n.wright@gmail.com?subject=Mail from Portfolio"
                    text="rhys.n.wright@gmail.com"
                    ><HiOutlineMail size={40} /></Icon>
                </ul>
            </article>
        </section>
    );
}

export default Contact;
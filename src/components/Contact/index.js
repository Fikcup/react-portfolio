import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './style.scss';
import Icon from '../Icon';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';

export const Contact = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3nsmrbc', 'template_o9n61gf', form.current, 'user_DE9q4IuPkQwHnL837Mrv0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id="contact">
            <h2 className="sectionTitle">Let's Work Together</h2>
            
            <article className="emailForm contactContainer">
                <h3 className="contactTitle">Send me an email</h3>
                <form ref={form} onSubmit={sendEmail} name="contactForm">
                    <label>Name</label><br />
                    <input type="text" name="user_name" /><br />
                    <label>Email</label><br />
                    <input type="email" name="user_email" /><br />
                    <label>Message</label><br />
                    <textarea name="message" /><br />
                    <input type="submit" value="Send" id="submit"/>
                </form>
            </article>

            <article className="contactContainer" id="contactInfo">
                <h3 className="contactTitle">Or contact me here</h3>
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
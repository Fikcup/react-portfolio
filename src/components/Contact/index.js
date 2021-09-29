import React, { useRef } from 'react';
import emailjs, { send } from 'emailjs-com';
import './style.scss';

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
        <form ref={form} onSubmit={sendEmail} name="contactForm">
            <label>Name</label><br />
            <input type="text" name="user_name" /><br />
            <label>Email</label><br />
            <input type="email" name="user_email" /><br />
            <label>Message</label><br />
            <textarea name="message" /><br />
            <input type="submit" value="Send" />
        </form>
    );
}

export default Contact;
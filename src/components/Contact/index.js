import React from 'react';
import './style.scss';

// TODO: Import form field validation from utils/helpers.js

const Contact = () => {
    return (
        <form action="mailto:rhys.n.wright@gmail.com?subject=Work Opportunity" 
        method="POST" 
        encType="multipart/form-data"
        name="EmailForm">
            <label htmlFor="name">Name:</label><br />
            <input
                type="text"
                name="name"
                defaultValue="name"
            /><br />
            <label htmlFor="email">Email Address:</label><br />
            <input 
                type="email"
                name="email"
                defaultValue="email"
            /><br />
            <label htmlFor="message">Message:</label><br />
            <textarea 
                name="message"
                rows="3"
                defaultValue="message"
            /><br />
            <input
                type="submit"
                name="submit"
                id="submit"
                value="Submit"
            />
        </form>
    );
}

export default Contact;
import React from 'react';

function Contact() {

    return (
        <section>
            <h2 className='section-title'>Contact</h2>
            <form id='contact-form'>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5"  />
                </div>
                <button type='submit' className='submit-button'>Submit</button>
            </form>
        </section>
    );
};

export default Contact;
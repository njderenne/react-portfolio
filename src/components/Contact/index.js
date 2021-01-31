import React from 'react';

function Contact() {

    return (
        <section className='min-height'>
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
            <p className='email-me'>or feel free to reach out via email: <span className='email-me'><a className='open-email' href='mailto:njderenne@gmail.com' target='_blank' rel='noopener noreferrer'>njderenne@gmail.com</a></span></p>
        </section>
    );
};

export default Contact;
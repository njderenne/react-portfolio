import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }    

    return (
        <section className='min-height'>
            <h2 className='section-title'>Contact</h2>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} name="name"  onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"  />
                </div>
                {errorMessage && (
                    <span className='error-message'>{errorMessage}</span>
                )}
                <button type='submit' className='submit-button'>Submit</button>
            </form>
            <p className='email-me'>or feel free to reach out via email: <span className='email-me'><a className='open-email' href='mailto:njderenne@gmail.com' target='_blank' rel='noopener noreferrer'>njderenne@gmail.com</a></span></p>
        </section>
    );
};

export default Contact;
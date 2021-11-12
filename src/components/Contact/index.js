import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";


function Contact() {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

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
        };
        
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });
        }
        console.log('errorMessage', errorMessage);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
    }

    return (
        <section id='contact' className='content-block'>
            <div className='row'>
                <div className='col'>
                    <h2 className='text-center'>Contact Me</h2>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <p className='text-center'>Complete the form to get a hold of me, or contact me directly via the links below.</p>
                </div>
            </div>
            <div className="card-resume my-3"> 
                <div className='row'>
                    <div className='col p-4'>
                        <form id="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" className='form-control contact-field' defaultValue={name} onBlur={handleChange} name="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address:</label>
                                <input type="text" className='form-control contact-field' defaultValue={email} onBlur={handleChange} name="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea name="message" className='form-control contact-field' defaultValue={message} onBlur={handleChange} rows="5" />
                            </div>
                            {errorMessage && (
                                <div>
                                    <p className="error-text">{errorMessage}</p>
                                </div>
                            )}
                            <button type="submit" className="btn contact-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
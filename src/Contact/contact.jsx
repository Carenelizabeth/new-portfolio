import React from 'react';
import './contact.css';

export default function Contact(props){
    return(
        <div className='contact-wrapper container'>
            <h3>Get in Touch</h3>
            <p>Do you have a problem that I can solve? Just want to chat?</p>
            <div className='contact-buttons'>
                <a href='https://github.com/Carenelizabeth' target='_blank' className='github-button image-link' rel='noopener noreferrer'>Github</a>
                <a href='https://www.linkedin.com/in/caren-keyes-5595b130/' target='_blank' className='linked-button image-link' rel='noopener noreferrer'>Linked In</a>
                <a href='https://twitter.com/caren_keyes' target='_blank' className='twitter-button image-link' rel='noopener noreferrer'>Twitter</a>
                <a href='mailto:Caren Keyes<cejkeyes@gmail.com>' target='_blank' className='email-button image-link' rel='noopener noreferrer'>Email</a>
            </div>
        </div>
    )
}
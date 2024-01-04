import React from 'react';
import Contact from '../component/contact';

const ContactSection = () => {
    return (
        <div className='getInTouch'>
            <h1 className='section__intro'>Contact</h1>
            <p className='about__text'>Have a question or want to work together? Leave your details and I&apos;ll get back to you as soon as possible.</p>
            <Contact />
        </div>
    );
};

export default ContactSection;

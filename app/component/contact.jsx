import React, { useRef } from "react";
import emailjs from '@emailjs/browser'

export default function Contact() {
const form = useRef();

const sendEmail = (e) => {
e.preventDefault();

emailjs.sendForm('service_f7z9tjl', 'template_xkfvxmc', form.current, 'YOUR_PUBLIC_KEY')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};
return(
<form className='form' ref={form} onSubmit={sendEmail}>
    <label>Name
    <input type="text" name="user_name" />
    </label>
    <label>Email
    <input type="email" name="user_email" />
    </label>
    <label>Message
    <textarea name="message" />
    </label>
    <input type="submit" value="Send" />
</form>
)


}
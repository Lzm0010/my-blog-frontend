import React, {useState} from 'react';
import styles from './ContactForm.module.css';

function ContactForm () {
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");
    const [message, setMessage] = useState("");
    const baseUrl = `http://localhost:3000`;

    const sendEmail = async () => {
        const contactUrl = `${baseUrl}/contacts`;
        const msgObj = {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
            "body": JSON.stringify({email, message: content})
        }

        const msgData = await fetch(contactUrl, msgObj);
        const msg = await msgData.json();

        return msg
    };

    const handleEmail = e => {
        const newEmail = e.target.value;
        setEmail(newEmail);
    };

    const handleContent = e => {
        const newContent = e.target.value;
        setContent(newContent);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const resp = await sendEmail();
        setEmail("");
        setContent("");
        setMessage(resp.message);
    };

    return(
        <div className={styles.container}>
            {message ? message : null}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={email} onChange={handleEmail} placeholder="Enter your Email here"/>

                <label htmlFor="content">Message</label>
                <textarea name="content" rows="7" cols="60" value={content} onChange={handleContent} placeholder="Tell me what's up!"/>
                <button className={styles.btn} type="submit" value="submit">Send!</button>
            </form>
        </div>
    )
}

export default ContactForm;
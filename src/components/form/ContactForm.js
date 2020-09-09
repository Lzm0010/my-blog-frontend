import React, {useState} from 'react';
import styles from './ContactForm.module.css';

function ContactForm () {
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");

    const sendEmail = () => {

    };

    const handleEmail = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
    };

    const handleContent = (e) => {
        const newContent = e.target.value;
        setContent(newContent);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail();
    };

    return(
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={email} onChange={handleEmail} placeholder="Enter your Email here"/>

                <label htmlFor="content">Message</label>
                <textarea name="content" rows="9" cols="60" value={content} onChange={handleContent} placeholder="Tell me what's up!"/>
                <button className={styles.btn} type="submit" value="submit">Send!</button>
            </form>
        </div>
    )
}

export default ContactForm;
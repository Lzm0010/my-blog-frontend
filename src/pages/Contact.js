import React, {Fragment} from 'react';
import Nav from '../components/nav/Nav';
import Header from '../components/basic/Header';
import ContactForm from '../components/form/ContactForm';
import Footer from '../components/basic/Footer';

function Contact () {
    return(
        <Fragment>
            <Nav />
            <Header />
            <ContactForm />
            <Footer />
        </Fragment>
    );
}

export default Contact;
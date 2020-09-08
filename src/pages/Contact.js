import React, {Fragment} from 'react';
import Nav from '../components/nav/Nav';
import Container from '../components/basic/Container';
import Header from '../components/basic/Header';
import ContactForm from '../components/form/ContactForm';
import Footer from '../components/basic/Footer';

function Contact () {
    return(
        <Fragment>
            <Nav />
            <Container>
                <Header />
                <ContactForm />
                <Footer />
            </Container>
        </Fragment>
    );
}

export default Contact;
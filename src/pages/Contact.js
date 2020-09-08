import React, {Fragment} from 'react';
import Nav from '../components/nav/Nav';
import Container from '../components/basic/Container';
import Header from '../components/basic/Header';
import ContactForm from '../components/form/ContactForm';
import Footer from '../components/basic/Footer';
import penAndPaper from '../images/penAndPaper.svg';

function Contact () {
    return(
        <Fragment>
            <Nav />
            <Container>
                <Header title="Contact Me" img={penAndPaper}/>
                <ContactForm />
                <Footer />
            </Container>
        </Fragment>
    );
}

export default Contact;
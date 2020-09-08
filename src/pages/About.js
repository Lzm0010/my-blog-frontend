import React, {Fragment} from 'react';
import Nav from '../components/nav/Nav';
import Container from '../components/basic/Container';
import Header from '../components/basic/Header';
import Timeline from '../components/timeline/Timeline';
import Footer from '../components/basic/Footer';



function About () {
    return(
        <Fragment>
            <Nav/>
            <Container>
                <Header title="About Me" />
                <Timeline />
                <Footer />
            </Container>
        </Fragment>
    )
}

export default About;
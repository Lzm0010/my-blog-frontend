import React, {Fragment} from 'react';
import Nav from '../components/nav/Nav';
import Container from '../components/basic/Container';
import Header from '../components/basic/Header';
import Timeline from '../components/timeline/Timeline';
import ResumeContainer from '../components/timeline/ResumeContainer';
import FooterLinks from '../components/basic/FooterLinks';
import lee from '../images/lee.svg';
import SkillsContainer from '../components/skills/SkillsContainer';

function About () {
    return(
        <Fragment>
            <Nav/>
            <Container>
                <Header title="About Me" img={lee}/>
                <Timeline>
                    <ResumeContainer />
                </Timeline>
                <SkillsContainer />
                <FooterLinks />
            </Container>
        </Fragment>
    )
}

export default About;
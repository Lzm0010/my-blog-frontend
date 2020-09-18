import React, {Fragment} from 'react';
import Nav from '../components/nav/Nav';
import Container from '../components/basic/Container';
import Header from '../components/basic/Header';
import Timeline from '../components/timeline/Timeline';
import ProjectsContainer from '../components/timeline/ProjectsContainer';
import FooterLinks from '../components/basic/FooterLinks';
import lab from '../images/lab.svg';
import styles from './Projects.module.css';


function Projects () {
    return(
        <Fragment>
            <Nav/>
            <Container>
                <Header title="Projects" img={lab}/>
                <Timeline>
                    <ProjectsContainer />
                </Timeline>
                <div className={styles.space}></div>
                <FooterLinks />
            </Container>
        </Fragment>
    )
}

export default Projects;
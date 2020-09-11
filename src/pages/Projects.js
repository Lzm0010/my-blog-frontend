import React, {Fragment} from 'react';
import Nav from '../components/nav/Nav';
import Container from '../components/basic/Container';
import Header from '../components/basic/Header';
import Timeline from '../components/timeline/Timeline';
import ProjectsContainer from '../components/timeline/ProjectsContainer';
import lab from '../images/lab.svg';


function Projects () {
    return(
        <Fragment>
            <Nav/>
            <Container>
                <Header title="Projects" img={lab}/>
                <Timeline>
                    <ProjectsContainer />
                </Timeline>
            </Container>
        </Fragment>
    )
}

export default Projects;
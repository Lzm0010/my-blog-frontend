import React, {Fragment} from 'react';
import Project from './Project';
import projects from '../../data/projects';
import TimeItem from './TimeItem';

function ProjectsContainer () {
    const displayProjects = () => {
        return projects.map(project => <TimeItem key={project.id} date={project.date}><Project project={project}/></TimeItem>)
    }

    return(
        <Fragment>{displayProjects()}</Fragment>
    )
}

export default ProjectsContainer;
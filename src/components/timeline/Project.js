import React from 'react';

function Project ({project}) {
    
    const displayProjectPoints = () => {
        return project.info.map((point, i) => <li key={i}>{point}</li>)
    }

    return(
        <div>
            <h3>{project.title}</h3>
            <img src={project.img} alt={project.id}/>
            <p>{project.summary}</p>
            <button>
                <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">Source Code</a>
            </button>
            <button>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
            </button>
            <ul>
                {displayProjectPoints()}
            </ul>
        </div>
    )
}

export default Project;
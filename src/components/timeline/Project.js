import React from 'react';
import styles from './Project.module.css';

function Project ({project}) {
    
    const displayProjectPoints = () => {
        return project.info.map((point, i) => <li key={i}>{point}</li>)
    }

    return(
        <div className={styles.projects}>
            <h3 className={styles.title}>{project.title}</h3>
            <img className={styles.image} src={project.img} alt={project.id}/>
            <p className={styles.summary}>{project.summary}</p>
            <button className={styles.btn}>
                <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">Source Code</a>
            </button>
            <button className={styles.btn}>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
            </button>
            <ul className={styles.points}>
                {displayProjectPoints()}
            </ul>
        </div>
    )
}

export default Project;
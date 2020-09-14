import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import styles from './Project.module.css';

function Project ({project}) {
    const [flipped, set] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })

    const displayProjectPoints = () => {
        return project.info.map((point, i) => <li key={i}>{point}</li>)
    }

    return(
        <div onClick={() => set(state => !state)} className={styles.projects}>
            <animated.div className="c" style={{ opacity: opacity.interpolate(o => 1 - o), transform } }>
                <h3 className={styles.title}>
                    {project.title}
                </h3>

                <img className={styles.image} src={project.img} alt={project.id}/>

                <p className={styles.summary}>
                    {project.summary}
                </p>

                <button className={styles.btn} onClick={e => e.stopPropagation()}>
                    <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">Source Code</a>
                </button>

                <button className={styles.btn} onClick={e => e.stopPropagation()}>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
                </button>
            </animated.div>
            <animated.div className="c" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
                <ul className={styles.points}>
                    {displayProjectPoints()}
                </ul>
            </animated.div>
        </div>
    )
}

export default Project;
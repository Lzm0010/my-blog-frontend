import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import styles from './ResumeFact.module.css';

function ResumeFact ({fact}) {
    const [flipped, set] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })

    const displayInfo = () => {
        return fact.info.map((point, i) => <li key={`pf-${i}`} className={styles.resumeLi}>{point}</li>);
    }

    return(
        <div onClick={() => set(state => !state)} className={styles.facts}>

            <animated.div className="c" style={{ opacity: opacity.interpolate(o => 1 - o), transform } }>
                <div className={styles.fact}>
                    <div className={styles.title}>
                        {fact.headline}
                    </div>
                    <div className={styles.row}>
                        <div className={styles.location}>
                            {fact.location}
                        </div>
                        {fact.position ? (
                            <div className={styles.position}>
                                {fact.position}
                            </div>
                        ) : null}
                    </div>
                    <img className={styles.image} src={fact.image} alt={fact.headline}/>
                    <div className={styles.details}>Click for details</div>
                </div>
            </animated.div>

            <animated.div className="c" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
                <ul className={styles.resumeList}>
                    {displayInfo()}
                </ul>
            </animated.div>

        </div>
    )
}

export default ResumeFact;
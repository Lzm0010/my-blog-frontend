import React from 'react';
import Date from './Date';
import {useSpring, animated} from 'react-spring';
import styles from './TimeItem.module.css';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function TimeItem (props) {
    const [springProps, setSpringProps] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    return(
        <div className={styles.timeItem}>
            <div className={styles.date}>
                <Date date={props.date}/>
                <div className={styles.dateLine}></div>
            </div>
            <div className={styles.lineShapes}>
                <div className={styles.ball}></div>
                <div className={styles.line}></div>
            </div>
            <animated.div 
                className={styles.itemCard}
                onMouseMove={({ clientX: x, clientY: y }) => setSpringProps({ xys: calc(x, y) })}
                onMouseLeave={() => setSpringProps({ xys: [0, 0, 1] })}
                style={{ transform: springProps.xys.interpolate(trans) }}
            >
                {props.children}
            </animated.div>
        </div>
    )
}

export default TimeItem;
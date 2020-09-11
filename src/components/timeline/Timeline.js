import React from 'react';
import styles from './Timeline.module.css';

function Timeline (props) {

    return(
        <div className={styles.timeline}>
            {props.children}
        </div>
    )
}

export default Timeline;
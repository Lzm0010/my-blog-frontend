import React from 'react';
import Date from './Date';
import styles from './TimeItem.module.css';

function TimeItem (props) {

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
            <div className={styles.itemCard}>
                {props.children}
            </div>
        </div>
    )
}

export default TimeItem;
import React from 'react';
import styles from './Header.module.css'


function Header (props) {
    return(
        <div className={styles.header}>
            <h1 className={styles.title}>{props.title}</h1>
            <img src={props.img} className={styles.headerImg} alt="Banner" />
        </div>
    )
}

export default Header;
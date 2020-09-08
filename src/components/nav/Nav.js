import React from 'react';
import {Link} from "@reach/router";
import styles from "./Nav.module.css";

function Nav () {
    return(
        <div className={styles.nav}>
            {/* Maybe change Link to just include padded div of word
                currently includes full invisble square
            */}

            <Link to="/">
                <div className={styles.topleftcorner}></div>
                <div className={styles.home} to="/">Home</div>
            </Link>

            <Link to="/about">
                <div className={styles.toprightcorner}></div>
                <div className={styles.about}>About</div>
            </Link>

            <Link to="/projects">
                <div className={styles.bottomleftcorner}></div>
                <div className={styles.projects}>Projects</div>
            </Link>

            <Link to="/contact">
                <div className={styles.bottomrightcorner}></div>
                <div className={styles.contact}>Contact</div>
            </Link>

        </div>
    )
}

export default Nav;
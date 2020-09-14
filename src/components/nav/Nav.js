import React from 'react';
import {Link} from "@reach/router";
import styles from "./Nav.module.css";

function Nav () {
    return(
        <div className={styles.nav}>
            {/* Maybe change Link to just include padded div of word
                currently includes full invisble square
            */}

                <div className={styles.topleftcorner}></div>
            <Link to="/">
                <div className={styles.home} to="/">Home</div>
            </Link>

                <div className={styles.toprightcorner}></div>
            <Link to="/about">
                <div className={styles.about}>About</div>
            </Link>

                <div className={styles.bottomleftcorner}></div>
            <Link to="/projects">
                <div className={styles.projects}>Projects</div>
            </Link>

                <div className={styles.bottomrightcorner}></div>
            <Link to="/contact">
                <div className={styles.contact}>Contact</div>
            </Link>

        </div>
    )
}

export default Nav;
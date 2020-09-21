import React, {useState} from 'react';
import {Link} from "@reach/router";
import styles from "./Nav.module.css";

function Nav () {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const isActive = () => {
        return isOpen ? styles.open : styles.closed;
    }


    return(
        <div className={styles.nav}>
            <div className={styles.mainNav}>
                <div className={styles.topleftcorner}></div>
                <Link to="/">
                    <div className={styles.home}>Home</div>
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
            <div className={styles.mobileNav}>
                <div className={styles.menu} onClick={handleClick}>
                    ≡
                </div>

                <div className={isActive()}>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">
                                    <div className={styles.mobileLink}>Home</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                    <div className={styles.mobileLink}>About</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects">
                                    <div className={styles.mobileLink}>Projects</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    <div className={styles.mobileLink}>Contact</div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>
    )
}

export default Nav;
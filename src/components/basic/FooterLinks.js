import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithubSquare, faLinkedin, faInstagramSquare} from '@fortawesome/free-brands-svg-icons'
import styles from './FooterLinks.module.css';

function FooterLinks () {
    return(
        <div className={styles.footerLinks}>
            <a href="https://github.com/Lzm0010" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithubSquare} size="4x" className={styles.faIcon} />
            </a>
            <a href="https://www.linkedin.com/in/lee-mccormick-ninja/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="4x" className={styles.faIcon} />
            </a>
            <a href="https://www.instagram.com/leemac6363/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagramSquare} size="4x" className={styles.faIcon }/>
            </a>
        </div>
    )
}

export default FooterLinks;
import React, {Fragment} from 'react';
import SkillCard from './SkillCard';
import skills from '../../data/skills';
import styles from './SkillsContainer.module.css';

function SkillsContainer () {
    const displaySkills = () => {
        return skills.map((skill,i) => <SkillCard key={`bigski-${i}`}skill={skill}/>)
    }

    return(
        <Fragment>
            <div className={styles.skillheader}>Skills</div> 
            <div className={styles.skillContainer}>
                {displaySkills()}
            </div>
        </Fragment>
    )
}

export default SkillsContainer;
import React from 'react';
import styles from './SkillCard.module.css';

function SkillCard ({skill}) {
    const displaySkills = () => {
    return skill.skills.map((sub, i) => <li key={`sub${i}`}>{sub}</li>)
    }

    return (
        <div className={styles.skillCard}>
            <div>{skill.title}</div>
            <div>{displaySkills()}</div>
        </div>
    );
}

export default SkillCard;
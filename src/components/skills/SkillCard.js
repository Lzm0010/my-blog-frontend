import React from 'react';
import styles from './SkillCard.module.css';

function SkillCard ({skill}) {
    const displaySkills = () => {
    return skill.skills.map((sub, i) => <li className={styles.skillLi} key={`sub${i}`}>{sub}</li>)
    }

    return (
        <div className={styles.skillCard}>
            <div className={styles.header}>
                <div className={styles.skillTitle}>{skill.title}</div>
                <img className={styles.image} src={skill.image} alt={skill.title}/>
            </div>
            <ul className={styles.skillList}>{displaySkills()}</ul>
        </div>
    );
}

export default SkillCard;
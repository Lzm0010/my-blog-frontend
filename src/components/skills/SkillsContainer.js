import React, {Fragment} from 'react';
import SkillCard from './SkillCard';
import skills from '../../data/skills';

function SkillsContainer () {
    const displaySkills = () => {
        return skills.map((skill,i) => <SkillCard key={`bigski-${i}`}skill={skill}/>)
    }

    return(
        <Fragment>{displaySkills()}</Fragment>
    )
}

export default SkillsContainer;
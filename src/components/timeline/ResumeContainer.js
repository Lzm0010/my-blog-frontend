import React, {Fragment} from 'react';
import ResumeFact from './ResumeFact';
import resume from '../../data/resume';
import TimeItem from './TimeItem';

function ResumeContainer () {
    const displayFacts = () => {
        return resume.map((fact, i) => <TimeItem key={`f-${i}`} date={fact.date}><ResumeFact fact={fact}/></TimeItem>)
    }

    return(
        <Fragment>{displayFacts()}</Fragment>
    )
}

export default ResumeContainer;
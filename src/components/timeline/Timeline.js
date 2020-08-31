import React from 'react';
import TimeItem from './TimeItem';

function Timeline (props) {
    console.log(props)

    return(
        <div>
            {props.children}
        </div>
    )
}

export default Timeline;
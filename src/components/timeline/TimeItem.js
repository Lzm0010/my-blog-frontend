import React from 'react';
import Date from './Date';

function TimeItem (props) {

    return(
        <div>
            <Date date={props.date}/>
            {props.children}
        </div>
    )
}

export default TimeItem;